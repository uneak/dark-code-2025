// Script de gestion d'appels API avec système de retry automatique

/**
 * Simule une API avec 60% de chance de succès
 * @returns {Promise<number[]>} Une promesse qui retourne un tableau de nombres en cas de succès
 * @throws {void} Rejette la promesse sans message d'erreur dans 40% des cas
 */
const winLose = async () => {
    return new Promise((resolve, reject) => {
        // Génère un nombre aléatoire entre 0 et 1
        const rnd = Math.random();
        // 60% de chance de succès (si rnd < 0.6)
        if (rnd < 0.6) {
            // Retourne un tableau de nombres en cas de succès
            resolve([1, 2]);
        } else {
            // 40% de chance d'échec - rejette sans message d'erreur
            reject();
        }
    });
};

/**
 * Fonction qui tente d'appeler l'API avec un système de retry
 * Essaye jusqu'à x tentatives et retourne dès qu'une tentative réussit
 * @param {number} x - Le nombre maximum de tentatives à effectuer
 * @returns {Promise<number[]|undefined>} Le résultat de l'API si succès, undefined si tous les essais échouent
 */
const tryT = async (x) => {
    // Compteur pour suivre le nombre de tentatives effectuées
    let base = 0;
    // Continue tant que le nombre de tentatives n'a pas atteint la limite
    while (base < x) {
        // Prépare le message de log pour cette tentative
        let msg = "";
        // Ajoute le numéro de tentative (base + 1 pour commencer à 1)
        msg += `Tentative ${ base + 1 }`;
        try {
            // Tente d'appeler l'API
            const data = await winLose();
            // Si succès, complète le message avec "Win"
            msg += " Win";
            console.log(msg)
            // Retourne immédiatement les données en cas de succès
            return data;
        }
        catch (error) {
            // Si échec, complète le message avec "Erreur"
            msg += " Erreur";
            console.log(msg)
            // Continue à la prochaine tentative
        }
        // Incrémente le compteur de tentatives
        base++;
    }
    // Si toutes les tentatives échouent, la fonction retourne implicitement undefined
}

// ====================
// EXÉCUTION DU TEST
// ====================

/**
 * Appel de test de la fonction tryT avec 5 tentatives maximum
 * Utilise .then() pour gérer le résultat asynchrone
 * ⚠️ Note: Ce code ne gère pas explicitement le cas d'échec total
 * Si toutes les tentatives échouent, data sera undefined
 * Idéalement, ajouter .catch() pour gérer les erreurs
 */
tryT(5).then((data) => {
    // Affiche le résultat final si au moins une tentative a réussi
    console.log("resultat final:", data);
});