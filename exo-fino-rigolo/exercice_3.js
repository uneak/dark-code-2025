// Exercice 3 : Transformation de données
// Transformez :
// javascriptconst users = [
//   { id: 1, prenom: 'Alice', nom: 'Martin' },
//   { id: 2, prenom: 'Bob', nom: 'Durand' }
// ];
// En :
// javascript[
//   { id: 1, nomComplet: 'Alice Martin' },
//   { id: 2, nomComplet: 'Bob Durand' }
// ]




const users = [
    { id: 1, prenom: 'Alice', nom: 'Martin' },
    { id: 2, prenom: 'Bob', nom: 'Durand' },
    { id: 3, prenom: 'Jean christophe', nom: 'Berchel' },
    { id: 3, prenom: 'Gaëlle', nom: 'Charles-Belamour' },
    { id: 3, prenom: 'Valéry', nom: 'JONDO' },
    { id: 3, prenom: 'Marc', nom: 'Galoyer' },
];


const utilisateursComplets = users. map(({nom, prenom, id}) => {
    return { id, nomComplet: `${prenom} ${nom}` };
});

console.log(utilisateursComplets);