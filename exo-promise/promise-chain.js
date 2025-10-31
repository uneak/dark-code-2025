function etape1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Étape 1 terminée");
            resolve("Résultat 1");
        }, 1000);
    });
}

function etape2(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Étape 2 terminée");
            resolve(data + " -> Résultat 2");
        }, 1000);
    });
}

function etape3(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Étape 3 terminée");
            resolve(data + " -> Résultat 3");
        }, 1000);
    });
}

// Chaînage propre et lisible
etape1()
    .then((resultat1) => {
        console.log(resultat1);
        return etape2(resultat1);
    })
    .then((resultat2) => {
        console.log(resultat2);
        return etape3(resultat2);
    })
    .then((resultat3) => {
        console.log("Résultat final:", resultat3);
    });