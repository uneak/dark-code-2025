/**
 * Simule un appel API avec un délai aléatoire entre 1 et 5 secondes
 * Cette fonction imite le comportement d'une vraie requête HTTP qui prendrait
 * un temps variable pour répondre
 *
 * @param {string} url - L'URL de l'API (utilisée juste pour l'affichage)
 * @returns {Promise} Une promesse qui se résout après le délai avec les données simulées
 */
const simulerAPI = (url) => {
    return new Promise((resolve) => {
        // Génère un nombre aléatoire entre 1000ms (1s) et 5000ms (5s)
        // Math.random() génère entre 0 et 1
        // * 4000 donne entre 0 et 4000
        // + 1000 donne entre 1000 et 5000
        const delaiAleatoire = Math.floor(Math.random() * 4000) + 1000;

        // Affiche l'URL appelée et le temps de réponse simulé
        console.log(`📡 Appel API vers ${url}...`);
        console.log(`⏳ Temps de réponse simulé : ${delaiAleatoire}ms`);

        // Simule l'attente de la réponse serveur
        setTimeout(() => {
            // Résout la promesse avec un objet simulant une réponse HTTP
            resolve({
                status: 200,                                   // Code HTTP de succès
                data: `Données récupérées depuis ${url}`,      // Données simulées
                responseTime: delaiAleatoire                   // Temps de réponse pour info
            });
        }, delaiAleatoire);
    });
};





/**
 * Crée une promesse qui se rejette après un certain délai (timeout)
 * Cette promesse sera en compétition avec l'appel API dans Promise.race()
 *
 * @param {number} duree - Le délai en millisecondes avant le timeout
 * @returns {Promise} Une promesse qui se rejette avec une erreur de timeout
 */
const creerTimeout = (duree) => {
    return new Promise((_, reject) => {
        // Le premier paramètre (resolve) n'est pas utilisé car on veut toujours rejeter
        // On utilise _ par convention pour indiquer un paramètre non utilisé

        setTimeout(() => {
            // Rejette la promesse avec un message d'erreur explicite
            reject(new Error("⏱️ Timeout dépassé"));
        }, duree);
    });
};

/**
 * Fonction principale qui effectue un appel API avec gestion du timeout
 * Utilise Promise.race() pour faire la course entre l'appel API et le timeout
 *
 * @param {string} url - L'URL de l'API à appeler
 * @param {number} timeout - Le délai maximum en ms avant abandon
 * @returns {Promise<Object>} Les données si succès, ou une erreur si timeout
 */
const fetchAvecTimeout = async (url, timeout) => {
    try {
        // Affichage des informations de démarrage
        console.log(`\n🚀 Lancement de fetchAvecTimeout()`);
        console.log(`📍 URL: ${url}`);
        console.log(`⏰ Timeout: ${timeout}ms`);
        console.log("-".repeat(50));

        // Promise.race() exécute plusieurs promesses en parallèle
        // et retourne le résultat de la PREMIÈRE qui se termine (succès ou échec)
        const resultat = await Promise.race([
            simulerAPI(url),           // Promesse 1 : simule l'appel API (1-5 secondes)
            creerTimeout(timeout)      // Promesse 2 : déclenche une erreur après 'timeout' ms
        ]);

        // Si on arrive ici, c'est que simulerAPI() s'est terminée en premier
        // Donc l'API a répondu AVANT le timeout
        console.log("✅ Succès ! La réponse est arrivée à temps");
        console.log(`📦 Données reçues :`, resultat);
        return resultat; // Retourne les données pour utilisation ultérieure

    } catch (error) {
        // Si on arrive ici, c'est que creerTimeout() s'est terminée en premier
        // Donc le timeout a été dépassé AVANT que l'API ne réponde

        // Propage l'erreur pour que l'appelant puisse la gérer
        throw error;
    }
};

/**
 * Fonction de test qui exécute plusieurs scénarios avec différents timeouts
 * Permet de voir le comportement de fetchAvecTimeout dans différentes situations
 */
const testerFonction = async () => {
    console.log("=" .repeat(60));
    console.log("🧪 TESTS DE LA FONCTION fetchAvecTimeout");
    console.log("=" .repeat(60));

    // Test 1 : Timeout très court (500ms)
    // Avec un délai API entre 1-5 secondes, ce test échouera presque toujours
    console.log("\n📝 Test 1 : Timeout très court (500ms)");
    try {
        await fetchAvecTimeout("https://api.exemple.com/data", 500);
    } catch (e) {
        // On s'attend à ce que ça échoue la plupart du temps
        console.log(`❌ Échec : ${e.message}`);
    }

    // Test 2 : Timeout moyen (2500ms = 2.5 secondes)
    // Avec un délai API entre 1-5 secondes, ce test a environ 50% de chances de réussir
    console.log("\n📝 Test 2 : Timeout moyen (2500ms)");
    try {
        await fetchAvecTimeout("https://api.exemple.com/users", 2500);
    } catch (e) {
        // Peut réussir ou échouer selon le délai aléatoire généré
        console.log(`❌ Échec : ${e.message}`);
    }

    // Test 3 : Timeout long (6000ms = 6 secondes)
    // Avec un délai API max de 5 secondes, ce test devrait toujours réussir
    console.log("\n📝 Test 3 : Timeout long (6000ms)");
    try {
        await fetchAvecTimeout("https://api.exemple.com/products", 6000);
    } catch (e) {
        // Ne devrait jamais échouer car 6s > 5s max de l'API
        console.log(`❌ Échec : ${e.message}`);
    }

    console.log("\n" + "=" .repeat(60));
    console.log("🏁 TESTS TERMINÉS");
    console.log("=" .repeat(60));
};

// Lancer automatiquement les tests au chargement du script
testerFonction();