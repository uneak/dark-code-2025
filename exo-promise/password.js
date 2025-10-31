// Exercice : Vérificateur de mot de passe 🔒
// Crée une fonction verifierMotDePasse(password) qui simule la vérification d'un mot de passe sur un serveur.
// Règles :
// La vérification prend 1,5 secondes
// Si le mot de passe fait moins de 6 caractères, la Promise est rejetée
// Sinon, la Promise est résolue avec un message de succès

// Teste ta fonction avec différents mots de passe (courts et longs) en utilisant .then() et .catch().



const verifierMotDePasse = password => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const errorList = [];

            if (password.length < 6) {
                errorList.push("Le mot de passe doit contenir au moins 6 caractères");
                // reject("Le mot de passe doit contenir au moins 6 caractères");
            } else {
                resolve("Le mot de passe est valide");
            }

            if (password !== "marcbest") {
                // reject("c'est pas marc");
                errorList.push("c'est pas marc");
            } else {
                resolve("c'est marc");
            }

            if (errorList.length > 0) {
                reject(errorList);
            }

        }, 1500);
    });
}

verifierMotDePasse("monmotdepasse")
    .then(message => console.log(message))
    .catch(errorList => console.log(errorList));

verifierMotDePasse("mon")
    .then(message => console.log(message))
    .catch(errorList => console.log(errorList));

verifierMotDePasse("123456")
    .then(message => console.log(message))
    .catch(errorList => console.log(errorList));
