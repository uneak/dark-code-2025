const utilisateurs = [
  { id: 1, nom: 'Alice', age: 25, ville: 'Paris', actif: true },
  { id: 2, nom: 'Bob', age: 30, ville: 'Lyon', actif: false },
  { id: 3, nom: 'Charlie', age: 35, ville: 'Paris', actif: true },
  { id: 4, nom: 'Diana', age: 28, ville: 'Marseille', actif: true }
];

// Trouver un utilisateur
const alice = utilisateurs.find(u => u.nom === 'Alice');
console.log(alice);

// Trouver l'index
const index = utilisateurs.findIndex(u => u.id === 3);
console.log(index);

// Filtrer par ville
const parisiens = utilisateurs.filter(u => u.ville === 'Paris');
console.log(parisiens);

// Extraire les noms
const noms = utilisateurs.map(u => u.nom);
console.log(noms); // ['Alice', 'Bob', 'Charlie', 'Diana']

// Utilisateurs actifs
const actifs = utilisateurs.filter(u => u.actif);
console.log(actifs);