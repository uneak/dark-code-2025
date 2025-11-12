// Exercice 4 : Supprimer les doublons
// Supprimez les doublons de :
// javascriptconst nombres = [1, 2, 2, 3, 3, 3, 4, 5, 5];
// const noms = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];

``

const nombres = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const noms = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];


// const nombresUniques = new Set(nombres);
// console.log(nombresUniques);
// const nombresUniquesArray = [...nombresUniques];
// console.log(nombresUniquesArray);


// const nomsUniques = new Set(noms);
// console.log(nomsUniques);
// const nomsUniquesArray = [...nomsUniques];
// console.log(nomsUniquesArray);


const nombresUniques = nombres.filter((nombre, index, array) => {
    return array.indexOf(nombre) === index;
});
console.log(nombresUniques);

const nombresUniquesReducer = nombres.reduce((acc, nombre) => {
    if (!acc.includes(nombre)) {
        acc.push(nombre);
    }
    return acc;
}, []);
console.log(nombresUniquesReducer);


console.log([...new Set(nombres)]);