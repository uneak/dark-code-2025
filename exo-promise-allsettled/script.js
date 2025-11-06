// ## Défi 11 : Promise.allSettled() - Le Robuste
// **Difficulté : ⭐⭐⭐⭐**

// Tu dois charger des données depuis 5 sources différentes.
// Certaines vont réussir, d'autres échouer.

// Crée 5 fonctions qui simulent des APIs :
// - 3 qui réussissent (resolve)
// - 2 qui échouent (reject)

// Utilise `Promise.allSettled()` pour :
// - Attendre que TOUTES se terminent (succès ou échec)
// - Afficher un rapport détaillé :
//   - Combien ont réussi
//   - Combien ont échoué
//   - Les détails de chaque résultat

// **Format du rapport :**
// ```
// 📊 Rapport de chargement :
// ✅ 3 réussites
// ❌ 2 échecs

// Détails :
// ✅ API 1 : { data: "ok" }
// ❌ API 2 : Erreur réseau
// ✅ API 3 : { data: "ok" }
// ❌ API 4 : Timeout
// ✅ API 5 : { data: "ok" }




const api1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "ok" });
        }, 1000);
    });
};

const api2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Erreur réseau"));
        }, 1000);
    });
};

const api3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "ok" });
        }, 1000);
    });
};

const api4 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Timeout"));
        }, 1000);
    });
};

const api5 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "ok" });
        }, 1000);
    });
};


Promise.all([api1(), api2(), api3(), api4(), api5()]).then(results => {
    console.log("📊 Rapport de chargement :");
    console.log("✅", results.filter((result) => result.status === "fulfilled").length, "réussites");
    console.log("❌", results.filter((result) => result.status === "rejected").length, "échecs");
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("✅ API", result.value.id, ":", result.value.data);
        } else {
            console.log("❌ API", result.value.id, ":", result.reason);
        }
    });
});