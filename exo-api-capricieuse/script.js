const appelAPI = async () => {
    return new Promise((resolve, reject) => {
        const rnd = Math.random();
        if (rnd < 0.6) {
            resolve(["Gaelle", "JC", "Marsu", "MOI"]);
        } else {
            reject(new Error("Erreur de l'API"));
        }
    });
};

const appelAvecRetry = async (maxTentatives) => {
    let tentative = 0;
    while (tentative < maxTentatives) {
        let message = "";
        message += `Tentative ${tentative + 1}`;
        try {
            const data = await appelAPI();
            message += `... ✅ Succès !`;
            console.log(message);

            return data;
        } catch (erreur) {
            message += `... ❌ Échec  `;
            console.log(message);
        }
        tentative++;
    }

    throw new Error("Impossible de récupérer les données");
}




(async () => {
    try {
        const data = await appelAvecRetry(3);
        console.log("✅ Succès full !");
        console.log(data);
    } catch (erreur) {
        console.log(erreur.message);
    }
})();
