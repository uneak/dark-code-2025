// ═══════════════════════════════════════════════════════════════════
// 🎯 Challenge BONUS : Le Coordinateur
// ═══════════════════════════════════════════════════════════════════
// Difficulté : ⭐⭐⭐⭐⭐
//
// CONCEPTS JAVASCRIPT AVANCÉS UTILISÉS DANS CE SCRIPT :
// --------------------------------------------------------
// 1. PROMISES : Objets représentant une valeur future (succès ou échec)
// 2. ASYNC/AWAIT : Syntaxe pour gérer les promesses de façon synchrone
// 3. WORKER POOL PATTERN : Pattern de concurrence pour limiter les ressources
// 4. CLOSURES : Fonctions qui capturent des variables de leur environnement
// 5. HIGH-ORDER FUNCTIONS : Fonctions qui retournent d'autres fonctions
//
// OBJECTIF :
// ----------
// Crée une fonction executerEnParallele(taches, maxConcurrent) qui :

// Prend un tableau de fonctions asynchrones
// Les exécute par groupes de maxConcurrent maximum
// Ne lance pas la tâche suivante tant qu'une n'est pas terminée

// Exemple :
// javascriptconst taches = [
//   () => tache("A", 1000),
//   () => tache("B", 2000),
//   () => tache("C", 1500),
//   () => tache("D", 1000),
//   () => tache("E", 3000),
// ];

// executerEnParallele(taches, 2);

// // Exécution :
// // 0s : A et B démarrent (max 2)
// // 1s : A finit, C démarre
// // 2s : B finit, D démarre
// // 2.5s : C finit, E démarre
// // 3s : D finit
// // 5.5s : E finit
// Indice : C'est un vrai challenge pro ! 🚀


// ═══════════════════════════════════════════════════════════════════
// VARIABLE GLOBALE
// ═══════════════════════════════════════════════════════════════════

// Variable globale pour tracker le temps de début de l'exécution
// Utilisée pour calculer les timestamps relatifs dans les logs
// Date.now() retourne le nombre de millisecondes écoulées depuis le 1er janvier 1970
let startTime;

// ═══════════════════════════════════════════════════════════════════
// FONCTION SIMULATEUR DE TÂCHE ASYNCHRONE
// ═══════════════════════════════════════════════════════════════════

/**
 * Simule une tâche asynchrone avec un délai donné
 * @param {string} nom - Le nom de la tâche (pour l'identification dans les logs)
 * @param {number} temps - La durée d'exécution simulée en millisecondes
 * @returns {Promise<string>} - Une promesse qui se résout avec un message de complétion
 */
const tache = (nom, temps) => {
    // Fonction helper pour calculer le temps écoulé depuis le début
    // Date.now() - startTime = temps écoulé en ms
    // Division par 1000 pour convertir en secondes
    // .toFixed(1) pour garder une décimale (ex: 1.5s)
    const timestamp = () => ((Date.now() - startTime) / 1000).toFixed(1);

    // Log immédiat du démarrage de la tâche avec timestamp
    console.log(`[${timestamp()}s] ${nom} démarre`);

    // Retourne une nouvelle promesse pour gérer l'asynchrone
    return new Promise((resolve, reject) => {
        // setTimeout simule une opération asynchrone (API call, lecture fichier, etc.)
        // Il exécute le callback après le délai spécifié
        setTimeout(() => {
            // Log de fin de tâche avec timestamp actuel et durée totale
            console.log(`[${timestamp()}s] ${nom} finit (après ${temps}ms)`);

            // Résout la promesse avec un message de succès
            // resolve() fait passer la promesse de "pending" à "fulfilled"
            resolve(`${nom} complété`);
        }, temps);
    });
};


// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION DES TÂCHES À EXÉCUTER
// ═══════════════════════════════════════════════════════════════════

// Tableau de fonctions qui retournent des promesses
// Chaque élément est une fonction fléchée qui encapsule l'appel à tache()
// Utilisation de fonctions au lieu d'appels directs pour permettre
// l'exécution différée (lazy evaluation) - les tâches ne démarrent que
// lorsque la fonction est appelée
const taches = [
    () => tache("A", 1000),  // Tâche A : durée 1 seconde
    () => tache("B", 2000),  // Tâche B : durée 2 secondes
    () => tache("C", 1500),  // Tâche C : durée 1.5 secondes
    () => tache("D", 1000),  // Tâche D : durée 1 seconde
    () => tache("E", 3000),  // Tâche E : durée 3 secondes
];



// ═══════════════════════════════════════════════════════════════════
// FONCTION PRINCIPALE : COORDINATEUR DE TÂCHES AVEC POOL DE WORKERS
// ═══════════════════════════════════════════════════════════════════

/**
 * Exécute un tableau de tâches asynchrones avec une limite de concurrence
 * Utilise le pattern "Worker Pool" pour limiter le nombre de tâches simultanées
 *
 * @param {Array<Function>} taches - Tableau de fonctions qui retournent des promesses
 * @param {number} maxConcurrent - Nombre maximum de tâches pouvant s'exécuter en parallèle
 * @returns {Promise<Array>} - Tableau des résultats dans l'ordre des tâches
 *
 * Fonctionnement :
 * - Crée un pool de "workers" (nombre limité par maxConcurrent)
 * - Chaque worker prend une tâche, l'exécute, puis prend la suivante
 * - Quand un worker finit une tâche, il en prend automatiquement une nouvelle
 * - Continue jusqu'à ce que toutes les tâches soient exécutées
 */
const executerEnParallele = async (taches, maxConcurrent) => {
    // Logs d'information sur l'exécution qui va commencer
    console.log(`\n🚀 Démarrage de l'exécution avec ${maxConcurrent} workers max\n`);
    console.log(`📊 ${taches.length} tâches à exécuter\n`);

    // Capture le temps de départ pour les timestamps relatifs
    // Utilisé par la fonction tache() pour calculer les temps écoulés
    startTime = Date.now();

    // Tableau pour stocker les résultats de chaque tâche
    // L'ordre est préservé : resultats[0] contiendra le résultat de taches[0]
    const resultats = [];

    // Index partagé entre tous les workers
    // Sert de pointeur sur la prochaine tâche à exécuter
    // Commence à 0 (première tâche) et sera incrémenté à chaque prise de tâche
    let index = 0;

    /**
     * Fonction worker qui s'exécute en boucle pour traiter les tâches
     * Chaque worker :
     * 1. Vérifie s'il reste des tâches (index < taches.length)
     * 2. Prend la tâche suivante (en incrémentant l'index)
     * 3. Exécute la tâche et attend sa complétion (await)
     * 4. Stocke le résultat
     * 5. Retourne à l'étape 1
     */
    const lancerWorker = async () => {
        // Boucle tant qu'il reste des tâches à traiter
        while (index < taches.length) {
            // Opération atomique : capture l'index actuel ET l'incrémente
            // Crucial pour éviter que deux workers prennent la même tâche
            // index++ retourne la valeur AVANT incrémentation

            // utiliser currentIndex pour stocker l'index actuel et éviter de modifier index pour l'effet de bord
            const currentIndex = index++;

            // Exécution de la tâche avec gestion d'erreur
            try {
                // Appel de la fonction qui retourne une promesse
                // await bloque jusqu'à ce que la promesse soit résolue
                const resultat = await taches[currentIndex]();

                // Stockage du résultat à la position correspondante
                // Préserve l'ordre des résultats même si l'exécution est parallèle
                resultats[currentIndex] = resultat;
            } catch (error) {
                // Gestion des erreurs : log et stockage dans les résultats
                console.error(`Erreur dans la tâche ${currentIndex}:`, error);
                resultats[currentIndex] = { error };
            }
        }
        // Le worker termine quand il n'y a plus de tâches
    };

    // ═══════════════════════════════════════════════════════════════════
    // CRÉATION ET LANCEMENT DU POOL DE WORKERS
    // ═══════════════════════════════════════════════════════════════════

    // Tableau pour stocker les promesses des workers
    const workers = [];

    // Création des workers
    // Math.min évite de créer plus de workers que de tâches
    // Ex: si 3 tâches et maxConcurrent=5, on crée seulement 3 workers
    for (let i = 0; i < Math.min(maxConcurrent, taches.length); i++) {
        // Chaque appel à lancerWorker() retourne une promesse
        // Le worker commence immédiatement à exécuter des tâches
        workers.push(lancerWorker());
    }

    // Point de synchronisation : attend que TOUS les workers terminent
    // Promise.all() retourne une promesse qui se résout quand toutes
    // les promesses du tableau sont résolues
    await Promise.all(workers);

    // Calcul et affichage du temps total d'exécution
    const tempsTotal = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n✅ Toutes les tâches sont terminées en ${tempsTotal}s\n`);

    // Retourne le tableau des résultats dans l'ordre original
    return resultats;
};


// ═══════════════════════════════════════════════════════════════════
// POINT D'ENTRÉE : EXÉCUTION DU PROGRAMME
// ═══════════════════════════════════════════════════════════════════

// Appel de la fonction avec les paramètres :
// - taches : le tableau de 5 fonctions définies plus haut
// - 2 : limite de concurrence (maximum 2 tâches simultanées)
//
// La méthode .then() est chainée pour traiter les résultats
// car executerEnParallele retourne une promesse
executerEnParallele(taches, 2).then((r) => {
    // Affichage des résultats une fois toutes les tâches terminées
    console.log("📝 Résultats:");

    // Parcours du tableau de résultats
    // forEach() exécute une fonction pour chaque élément
    // res : le résultat de chaque tâche
    // i : l'index (position dans le tableau, commence à 0)
    r.forEach((res, i) => console.log(`   ${i + 1}. ${res}`));  // i+1 pour affichage 1-based

    // Ligne de séparation pour une meilleure lisibilité
    console.log("═══════════════════════════════════════════");
});

// ═══════════════════════════════════════════════════════════════════
// CHRONOLOGIE D'EXÉCUTION ATTENDUE (avec maxConcurrent = 2) :
// ═══════════════════════════════════════════════════════════════════
//
// Timeline détaillée :
// ┌────────────────────────────────────────────────────────────────┐
// │ Temps │ Worker 1    │ Worker 2    │ Action                     │
// ├────────────────────────────────────────────────────────────────┤
// │ 0.0s  │ A démarre   │ B démarre   │ 2 workers démarrent        │
// │ 1.0s  │ A finit     │ B continue  │ Worker 1 prend C           │
// │ 1.0s  │ C démarre   │ B continue  │ C remplace A               │
// │ 2.0s  │ C continue  │ B finit     │ Worker 2 prend D           │
// │ 2.0s  │ C continue  │ D démarre   │ D remplace B               │
// │ 2.5s  │ C finit     │ D continue  │ Worker 1 prend E           │
// │ 2.5s  │ E démarre   │ D continue  │ E remplace C               │
// │ 3.0s  │ E continue  │ D finit     │ Plus de tâches, Worker 2   │
// │       │             │             │ se termine                 │
// │ 5.5s  │ E finit     │ (terminé)   │ Worker 1 se termine        │
// └────────────────────────────────────────────────────────────────┘
//
// Temps total : 5.5 secondes (au lieu de 8.5s en séquence)
// Gain de performance : ~35% de réduction du temps total

// ═══════════════════════════════════════════════════════════════════
// AVANTAGES DE CETTE APPROCHE :
// ═══════════════════════════════════════════════════════════════════
//
// 1. CONTRÔLE DE LA CONCURRENCE :
//    - Limite le nombre de tâches simultanées
//    - Évite la surcharge système (CPU, mémoire, connexions réseau)
//    - Respecte les limites d'API (rate limiting)
//
// 2. OPTIMISATION DES PERFORMANCES :
//    - Réduit le temps total d'exécution
//    - Utilise efficacement les ressources disponibles
//    - Balance la charge entre les workers
//
// 3. GESTION D'ERREUR ROBUSTE :
//    - Chaque tâche a sa propre gestion d'erreur
//    - Une erreur n'arrête pas les autres tâches
//    - Les erreurs sont collectées dans les résultats
//
// 4. PRÉSERVATION DE L'ORDRE :
//    - Les résultats sont stockés dans l'ordre original
//    - Facilite le traitement ultérieur des données
//
// ═══════════════════════════════════════════════════════════════════
// AMÉLIORATIONS POSSIBLES :
// ═══════════════════════════════════════════════════════════════════
//
// 1. PROGRESS REPORTING :
//    - Ajouter un callback pour suivre la progression
//    - Afficher une barre de progression
//
// 2. RETRY LOGIC :
//    - Réessayer automatiquement les tâches échouées
//    - Configurer le nombre maximum de tentatives
//
// 3. TIMEOUT HANDLING :
//    - Ajouter une durée maximale par tâche
//    - Annuler les tâches qui dépassent le timeout
//
// 4. PRIORITY QUEUE :
//    - Permettre des priorités différentes pour les tâches
//    - Exécuter les tâches importantes en premier
//
// 5. CANCELLATION TOKEN :
//    - Permettre l'annulation de l'exécution en cours
//    - Nettoyer proprement les ressources
//
// ═══════════════════════════════════════════════════════════════════
//
// CAS D'USAGE RÉELS DE CE PATTERN :
// ─────────────────────────────────
//
// 1. WEB SCRAPING :
//    - Limiter les requêtes simultanées vers un serveur
//    - Éviter d'être bloqué pour trop de requêtes
//
// 2. TRAITEMENT D'IMAGES :
//    - Redimensionnement de milliers d'images
//    - Limiter l'usage de la mémoire
//
// 3. APPELS API :
//    - Respecter les rate limits des API tierces
//    - Ex: API Twitter limite à 15 requêtes/15min
//
// 4. UPLOAD DE FICHIERS :
//    - Upload parallèle mais limité de fichiers
//    - Éviter la saturation de la bande passante
//
// 5. PROCESSING DE DATA :
//    - Traitement de gros volumes de données
//    - Contrôle de l'usage CPU/RAM
//
// 6. NOTIFICATIONS PUSH :
//    - Envoi de notifications à des milliers d'utilisateurs
//    - Limiter la charge sur le serveur de notifications
//
// 7. DATABASE OPERATIONS :
//    - Bulk inserts/updates avec limite de connexions
//    - Éviter de surcharger la base de données
//
// ═══════════════════════════════════════════════════════════════════