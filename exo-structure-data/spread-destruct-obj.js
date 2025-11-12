const personne = {
  nom: 'Alice',
  age: 25,
  ville: 'Paris',
  email: 'alice@example.com'
};

// Déstructuration basique
const { age, nom } = personne;
console.log(nom, age); // 'Alice' 25

// // Renommer les variables
const { nom : prenom, age: annees } = personne;
console.log(prenom, annees); // 'Alice' 25

// // Valeurs par défaut
const { pays = 'France' } = personne;
console.log(pays); // 'France'

// // Rest operator
const { nom, ...infos } = personne;
console.log(nom);   // 'Alice'
console.log(infos); // { age: 25, ville: 'Paris', email: '...' }

// // Déstructuration imbriquée
const user = {
  id: 1,
  nom: 'Bob',
  adresse: {
    rue: '123 Main St',
    ville: 'Lyon'
  }
};

const { adresse: { ville } } = user;
console.log(ville); // 'Lyon'

// // Dans les paramètres de fonction
function afficherPersonne({ nom, age }) {
  console.log(`${nom} a ${age} ans`);
}

afficherPersonne(personne); // 'Alice a 25 ans'