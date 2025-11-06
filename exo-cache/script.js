
const cache = {};


const appelAPI = async (id) => {
    return new Promise((resolve, reject) => {
        console.log("appelAPI debut");
        // Simule un appel réseau avec un délai de 3 secondes
        setTimeout(() => {
            resolve({ id: id, nom: "User" + id, age: 20 + id });
        }, 2000);
    });
};


const getDonneesAvecCache = async (id) => {
    console.log("getDonneesAvecCache debut");
    if (cache[id]) {
        console.log("cache hit", cache[id]);
        return cache[id];
    } else {
        const donnees = await appelAPI(id);
        console.log("cache miss, appelAPI", donnees);
        cache[id] = donnees;
        return donnees;
    }
}



(async () => {
    await getDonneesAvecCache(1); // Prend 2 secondes
    console.log({cache});
    await getDonneesAvecCache(1); // Instantané (depuis le cache)
    console.log({cache});
    await getDonneesAvecCache(2); // Prend 2 secondes
    console.log({cache});
    await getDonneesAvecCache(3); // Instantané
    console.log({cache});
    await getDonneesAvecCache(4); // Instantané
    console.log({cache});
    await getDonneesAvecCache(5); // Instantané
    console.log({cache});
    await getDonneesAvecCache(6); // Instantané
    console.log({cache});
})();
