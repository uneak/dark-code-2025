// Exercice 6 : Chaînage avancé
// À partir de ce tableau de commandes :
// javascriptconst commandes = [
//   { id: 1, client: 'Alice', montant: 100, statut: 'payée' },
//   { id: 2, client: 'Bob', montant: 50, statut: 'en attente' },
//   { id: 3, client: 'Charlie', montant: 200, statut: 'payée' },
//   { id: 4, client: 'Diana', montant: 75, statut: 'payée' }
// ];
// Calculez le montant total des commandes payées.


const commandes = [
  { id: 1, client: 'Alice', montant: 100, statut: 'payée' },
  { id: 2, client: 'Bob', montant: 50, statut: 'en attente' },
  { id: 3, client: 'Charlie', montant: 200, statut: 'payée' },
  { id: 4, client: 'Diana', montant: 75, statut: 'payée' }
];

const montantTotalPayes = commandes.filter((commande) => {
    return commande.statut === 'payée';
}).reduce((acc, commande) => {
    return acc + commande.montant;
}, 0);

console.log(montantTotalPayes);