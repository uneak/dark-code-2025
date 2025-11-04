const tempsAleatoire = () => Math.round(((Math.random() * 4) + 1) * 1000);

const courirVoiture = (modele, temps) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({modele: modele, temps: temps});
        }, temps);
    });
};

const voiture1 = courirVoiture("Ferrari", tempsAleatoire());
const voiture2 = courirVoiture("Porsche", tempsAleatoire());
const voiture3 = courirVoiture("Lamborghini", tempsAleatoire());


Promise.race([voiture1, voiture2, voiture3])
    .then((winner) => { 
        console.log(`🏁 ${winner.modele} a gagné en ${winner.temps / 1000} secondes !`);
     });


async function asyncRace() {
    const winner = await Promise.race([voiture1, voiture2, voiture3]);
    console.log(`🏁 ${winner.modele} a gagné en ${winner.temps / 1000} secondes !`);
}

asyncRace();