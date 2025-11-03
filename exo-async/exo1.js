

// Crée une fonction preparerPetitDejeuner() qui simule la préparation d'un petit-déjeuner avec les étapes suivantes :

// Faire chauffer l'eau (2 secondes)
// Préparer le café (1 seconde)
// Faire griller le pain (3 secondes)

// Chaque étape doit afficher un message dans la console quand elle commence et quand elle se termine.


async function faireChaufferLEau() {
    const start = Date.now();
//    console.log(`⏱️  [${new Date().toLocaleTimeString()}] START Chauffer l'eau...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const elapsed = Date.now() - start;
            resolve(`✓ [${new Date().toLocaleTimeString()}] Chauffer l'eau terminée (${elapsed}ms)`);
        }, 2000);
    });
}

async function preparerCafe() {
//    console.log("START Préparer le café...");
    const start = Date.now();
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const elapsed = Date.now() - start;
//            console.log("Préparer le café...");
            resolve(`✓ [${new Date().toLocaleTimeString()}] Préparer le café terminée (${elapsed}ms)`);
        }, 1000);
    });
}


async function faireGrillerLePain() {
    const start = Date.now();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
//            console.log("Faire griller le pain...");
            const elapsed = Date.now() - start;
            resolve(`✓ [${new Date().toLocaleTimeString()}] Faire griller le pain terminée (${elapsed}ms)`);
        }, 3000);
    });
}


async function preparerPetitDejeuner() {
    console.log("Préparer le petit-déjeuner...");

    const fileCafe = async () => {
        const eau = await faireChaufferLEau();
        console.log(eau);
        const cafe = await preparerCafe();
        console.log(cafe);
    };


    const results = await Promise.all([fileCafe(), faireGrillerLePain()]);
    results.forEach(result => console.log(result));
    console.log("Petit-déjeuner préparé !");
}



(async () => {
    try {
        // Récupère le temps de démarrage en millisecondes
        const startTime = Date.now();
        console.log(`⏱️  Démarrage: ${new Date().toLocaleTimeString()}`);

        await preparerPetitDejeuner();

        // Calcule le temps total écoulé
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        console.log(`⏱️  Fin: ${new Date().toLocaleTimeString()}`);
        console.log(`⏱️  Temps total: ${totalTime}ms (${(totalTime / 1000).toFixed(2)}s)`);
    } catch (error) {
        console.log("Erreur:", error.message);
    }
})();