// vide

function randomNumber() {
    return Math.round(Math.random() * 100);
}

function verifierNombre(nombreUtilisateur, nombreMystere) {
        if (nombreUtilisateur < nombreMystere) {
        console.log("Le prix mysterieux est plus haut");
    } else if (nombreUtilisateur > nombreMystere) {
        console.log("Le prix mysterieux est plus bas");
    } else {
        console.log("Bravo, vous avez trouve le prix");
        return true;
    }
    return false;
}

const tryNumber = 20;
const mysteryPrice = randomNumber();
let tryRound = 1;


while (tryRound <= tryNumber) {

    if (tryRound < (tryNumber / 3)) {
        console.log("Vas-y essaye encore !");
    } else if (tryRound < (tryNumber / 3) * 2) {
        console.log("Vas-y champion !! tu es le meilleur !");
    } else {
        console.log("Donne tout, tu es le meilleur !");
    }

    let price = prompt("Quel est le prix (round " + tryRound + "/" + tryNumber + ") ?");
    tryRound = tryRound + 1;

    if (verifierNombre(price, mysteryPrice) == true) {
        break;
    }

    
    console.log({
        price: price,
        mysteryPrice: mysteryPrice,
        tryRound: tryRound,
        tryNumber: tryNumber
    });
}

if (tryRound > tryNumber) {
    console.log("Vous avez perdu");
}

