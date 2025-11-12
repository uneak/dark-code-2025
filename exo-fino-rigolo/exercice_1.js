// Exercice 1 : Manipulation de tableau
// Soit le tableau : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Créez un nouveau tableau avec seulement les nombres pairs
// Doublez tous les nombres
// Calculez la somme de tous les nombres
// Trouvez le nombre maximum



const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nombresPairs = nombres.filter(nombre => nombre % 2 === 0);
console.log(nombresPairs);

const nombresPairsDoubles = nombres.map(nombre => nombre * 2);
console.log(nombresPairsDoubles);

const somme = nombres.reduce((acc, nombre) => {
    acc += nombre;
    return acc;
}, 0);
console.log(somme);

const maximum = Math.max(...nombres);
console.log(maximum);

const maximum2 = nombres.reduce((acc, nombre) => nombre > acc ? nombre : acc, 0);
console.log(maximum2);
