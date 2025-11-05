
// Script de simulation d'une API capricieuse avec système de retry

/**
 * Simule une API instable qui a seulement 10% de chance de succès
 * @returns {Promise<string[]>} Une promesse qui retourne un tableau de messages en cas de succès
 * @throws {Error} Une erreur dans 90% des cas pour simuler l'instabilité de l'API
 */
function appelAPI() {
    // Génère un nombre aléatoire entre 0 et 1
    const chance = Math.random();

    return new Promise((resolve, reject) => {
        // 10% de chance de succès (si chance < 0.1)
        if (chance < 0.1) {
            // Retourne un tableau avec des messages de test
            resolve(["hello world", "bonjour le monde"])
        } else {
            // 90% de chance d'échec - simule une erreur de l'API
            reject(new Error("Erreur de l'API"));
        }
    });
}

/**
 * Fonction qui appelle l'API avec un système de retry (réessai)
 * Réessaye jusqu'à un nombre maximum de tentatives défini
 * @param {number} maxTentatives - Le nombre maximum de tentatives à effectuer
 * @returns {Promise<string[]>} Le résultat de l'API si une tentative réussit
 * @throws {Error} Si toutes les tentatives échouent
 */
async function appelAvecRetry(maxTentatives) {
    // Boucle sur le nombre de tentatives (de 1 à maxTentatives inclus)
    for (let tentatives = 1; tentatives <= maxTentatives; tentatives++) {
        try {
            // Tente d'appeler l'API (fonction asynchrone)
            const resultat = await appelAPI();
            // Si l'appel réussit, affiche le succès avec le numéro de tentative
            console.log("Tentative n°", tentatives, "Réussi 🔥 ");
            // Retourne immédiatement le résultat en cas de succès
            return resultat;
        } catch (erreur) {
            // Si l'appel échoue, affiche l'échec avec le numéro de tentative
            console.log("Tentative n°", tentatives, "Erreur 😢");
            // La boucle continue automatiquement pour réessayer
        }
    }

    // Si toutes les tentatives ont échoué, lance une erreur
    throw new Error("Impossible d'obtenir un résultat");
}


// ====================
// BLOC DE TEST
// ====================

/**
 * IIFE (Immediately Invoked Function Expression) asynchrone pour tester les fonctions
 * Cette fonction auto-exécutante permet de tester le système de retry immédiatement
 */
(async () => {
    try {
        // Essaye d'appeler l'API avec un maximum de 5 tentatives
        const data = await appelAvecRetry(5);
        // Si au moins une tentative réussit, affiche le résultat obtenu
        console.log("resultat appelAvecRetry:", data);
    } catch (erreur) {
        // Si toutes les 5 tentatives échouent, affiche l'erreur
        console.log("erreur:", erreur);
    }
})();
