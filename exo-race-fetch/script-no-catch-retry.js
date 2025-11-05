
/**
 * Simule un appel API avec un délai fixe de 3 secondes
 * @param {string} url - L'URL de l'API (paramètre simulé)
 * @returns {Promise<string>} - Une promesse qui se résout avec "api" après 3 secondes
 */
const appelAPI = async (url) => {
    return new Promise((resolve, reject) => {
        console.log("appelAPI debut");
        // Simule un appel réseau avec un délai de 3 secondes
        setTimeout(() => {
            console.log("appelAPI terminé");
            resolve("api");
        }, 3000);
    });
};

/**
 * Crée une promesse de timeout qui se résout après un délai spécifié
 * @param {number} delai - Le délai en millisecondes avant résolution
 * @returns {Promise<string>} - Une promesse qui se résout avec "timeout" après le délai
 */
const setTimeoutPromise = async (delai) => {
    return new Promise((resolve, reject) => {
        console.log("setTimeoutPromise debut");
        // Configure un timer qui se déclenche après le délai spécifié
        setTimeout(() => {
            console.log("setTimeoutPromise terminé");
            resolve("timeout");
        }, delai);
    });
};

/**
 * Effectue un appel API avec un timeout - renvoie le résultat de la première promesse résolue
 * Utilise Promise.race pour mettre en compétition l'appel API et le timeout
 * @param {string} url - L'URL de l'API à appeler
 * @param {number} timeout - Le délai maximum d'attente en millisecondes
 * @returns {Promise} - Une promesse (qui ne se résout ni ne se rejette actuellement)
 */
const fetchAvecTimeout = async (url, timeout) => {
    return new Promise(async (resolve, reject) => {
        // Promise.race renvoie la première promesse qui se résout ou se rejette
        // Ici, on met en course le timeout et l'appel API
        const winner = await Promise.race([
            setTimeoutPromise(timeout),
            appelAPI(url)
        ]);

        // Affiche quelle promesse a gagné la course
        console.log("winner is :", winner);
        // Note: Cette fonction ne résout ni ne rejette actuellement sa promesse
        // Il faudrait ajouter resolve(winner) ou reject() selon le cas
    });
}

// Exemple d'utilisation : appel API avec timeout de 4 secondes
// Comme l'API prend 3 secondes et le timeout est de 4 secondes, l'API gagnera
fetchAvecTimeout("https://api.example.com/data", 4000);
