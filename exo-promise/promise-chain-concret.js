// Simule une API backend
function verifierIdentifiants(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email && password) {
                console.log("✓ Identifiants vérifiés");
                resolve({ userId: 123, email: email });
            } else {
                reject("Identifiants invalides");
            }
        }, 1000);
    });
}

function chargerProfil(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✓ Profil utilisateur chargé");
            resolve({ userId: userId, nom: "Jean Dupont", age: 25 });
        }, 1000);
    });
}

function chargerDonneesUtilisateur(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✓ Données utilisateur chargées");
            resolve({ userId: userId, articles: 42, followers: 128 });
        }, 1000);
    });
}

function afficherTableauDeBord(donnees) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✓ Tableau de bord affiché");
            console.log("Bienvenue", donnees.profil.nom);
            console.log("Vous avez", donnees.stats.articles, "articles");
            resolve("Chargement complet!");
        }, 500);
    });
}





// ========== CHAÎNAGE PRATIQUE ==========
verifierIdentifiants("jean@example.com", "password123")
    .then((user) => {
        console.log("📝 Utilisateur connecté :", user.email);
        return chargerProfil(user.userId);  // Passe userId à la function suivante
    })
    .then((profil) => {
        console.log("👤 Profil reçu :", profil.nom, profil.age);
        return chargerDonneesUtilisateur(profil.userId);  // Passe userId
    })
    .then((stats) => {
        console.log("📊 Stats reçues :", stats.articles, "articles");
        return afficherTableauDeBord({
            profil: { nom: "Jean Dupont" },
            stats: stats
        });
    })
    .then((message) => {
        console.log("✅ " + message);
    })
    .catch((erreur) => {
        console.error("❌ Erreur :", erreur);
    });
