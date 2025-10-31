function preparerPizza(type) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === "hawaïenne") {
                reject("Le chef refuse de faire une pizza hawaïenne!");
            } else {
                resolve(`Ta pizza ${type} est prête !`);
            }
        }, 2000);
    });

}


// Teste ta fonction ici :
preparerPizza("margherita")
    .then(message => console.log(message))
    .catch(erreur => console.log("Erreur:", erreur));

preparerPizza("hawaïenne")
    .then(message => console.log(message))
    .catch(erreur => console.log("Erreur:", erreur));


// Exercice : Vérificateur de mot de passe 🔒
// Crée une fonction verifierMotDePasse(password) qui simule la vérification d'un mot de passe sur un serveur.
// Règles :

// La vérification prend 1,5 secondes
// Si le mot de passe fait moins de 6 caractères, la Promise est rejetée
// Sinon, la Promise est résolue avec un message de succès

// Teste ta fonction avec différents mots de passe (courts et longs) en utilisant .then() et .catch().