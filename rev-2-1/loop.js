//Créez une boucle qui affiche les nombres de 1 à 10
const numberArray = [];

for (let index = 1; index <= 10; index++) {
    console.log(index);
    numberArray.push(index);
}


console.log("---");
// Créez une boucle qui affiche les nombres pairs de 0 à 20

for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        console.log(index);
    }
}

console.log("---");
// Créez une boucle qui affiche la table de multiplication de 8 (de 1 à 10)


[1,2,3,4,5,6,7,8,9,10].forEach(element => {
    console.log(`${element} x 8 = ${element * 8}`);
})



console.log("---");
// Créez un tableau avec 5 noms et affichez-les tous avec une boucle

let fruits = ["banane", "pomme", "poire", "kiwi", "mangue"];

fruits.forEach(fruit => {
    console.log(fruit);
});