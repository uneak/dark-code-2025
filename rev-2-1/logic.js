let testBolosse = require("./lib.js").testBolosse;

let marcUser = {
    nom: "Marc",
    voiture: true,
    moto: false,
    ordinateur: true,
    tv: false,
    age: 22
}

let gaelleUser = {
    nom: "Gaelle",
    voiture: true,
    moto: true,
    ordinateur: false,
    tv: true,
    age: 18
}


let message = testBolosse(gaelleUser);
console.log(message);