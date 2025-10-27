
function presenteUnePersonne({adresse2, prenom, nom, adresse1, cp, age}) {
    // console.log("Bonjour je suis une personne " + nom + " " + prenom + " de " + age + " ans");

    return {nom, prenom, age};
}


function factory(couleur) {
    if (couleur === "rouge") {
        return function(nom) {
            return "Bonjour je suis " + nom + " de couleur rouge";
        }
    } else if (couleur === "bleu") {
        return function(nom) {
            return "Bonjour je suis " + nom + " de couleur bleu";
        }
    } else {    // couleur === "vert"
        return function(nom) {
            return "Bonjour je suis " + nom + " de couleur vert";
        }
    }
}

const helloFn = factory("bleu");
console.log(helloFn("Jean"));

//=>

// const prenom = obj.prenom;
// const age = obj.age;
// const nom = obj.nom;
// const adresse1 = obj.adresse1;
// const adresse2 = obj.adresse2;
// const cp = obj.cp;

// console.log(prenom);

// let {nom, prenom, age} = presenteUnePersonne({
//     age: 25,
//     prenom: "Marie",
//     nom: "Dupont",
//     adresse2: "75001 Paris",
//     adresse1: "1 rue de la Paix",
//     cp: "France",
// });



// function getAge(dateDeNaissance) {
//     const date = new Date();
//     return date.getFullYear() - dateDeNaissance.getFullYear();
// }


// const maDateDeNaissance = new Date("1980-07-29");
// console.log({maDateDeNaissance});

// let age = getAge(maDateDeNaissance);
// console.log("dans 10 ans j'aurai " + (age+10) + " ans");
// console.log({result: age});


