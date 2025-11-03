// Defi 1 : Le Compteur Asynchrone

// Solution 1 : Avec async/await (plus lisible)
function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function compterJusqua(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
        if (i < n) {
            await attendre(1000);
        }
    }
}

// Solution 2 : Avec Promise et recursion (sans async/await)
function compterJusquaPromise(n) {
    let compteur = 1;

    function compter() {
        return new Promise(resolve => {
            console.log(compteur);
            compteur++;

            if (compteur <= n) {
                setTimeout(() => {
                    compter().then(resolve);
                }, 1000);
            } else {
                resolve();
            }
        });
    }

    return compter();
}

// Exemple d'utilisation
// console.log("Debut du compteur...");
// compterJusqua(5).then(() => {
//   console.log("Termine !");
// });

// Decommenter pour tester la solution 2
// compterJusquaPromise(5).then(() => {
//   console.log("Termine !");
// });





const compterJusquaRecursive = async (to, current = 1) => new Promise(resolve => {
    console.log(current);
    if (current < to) {
        setTimeout(async () => {
            await compterJusquaRecursive(to, current + 1);
        }, 1000);
    }
});


//Exemple d'utilisation
console.log("Debut du compteur...");
compterJusquaRecursive(10).then(() => {
    console.log("Termine !");
});

