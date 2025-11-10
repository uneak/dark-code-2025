

const entreprise = {
  nom: 'TechCorp',
  adresse: {
    rue: '123 Main St',
    ville: 'Paris',
    cp: 75001
  },
  employes: [
    { nom: 'Alice', poste: 'Dev' },
    { nom: 'Bob', poste: 'Designer' }
  ]
};

// Accès
// console.log(entreprise.adresse.ville); // 'Paris'
// console.log(entreprise.employes[0].nom); // 'Alice'

// Optional chaining (?.)
const user = { profile: null };


if (user && user.profile) {
  console.log(user.profile.email); // 'john.doe@example.com'
} else {
  console.log('undefined');
}
