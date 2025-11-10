const commandes = [
    {
        id: 1,
        client: 'Alice',
        produits: [
            { nom: 'Laptop', prix: 1000, quantite: 1 },
            { nom: 'Souris', prix: 25, quantite: 2 }
        ]
    },
    {
        id: 2,
        client: 'Bob',
        produits: [
            { nom: 'Clavier', prix: 75, quantite: 1 }
        ]
    }
];



// Calculer le total de chaque commande
const commandesAvecTotal = commandes.map((commande) => ({
    ...commande,
    total: commande.produits.reduce((acc, produit) =>
        acc + (produit.prix * produit.quantite), 0
    )
}));

// Extraire tous les produits uniques
const tousProduits = commandes
    .flatMap(commande => commande.produits)
    .map(produit => produit.nom);

console.log({ tousProduits });


// const produitsUniques = [...new Set(tousProduits)];
// console.log(produitsUniques); // ['Laptop', 'Souris', 'Clavier']

// Chiffre d'affaires total
const ca = commandes
  .flatMap(commande => commande.produits)
  .reduce((acc, p) => acc + (p.prix * p.quantite), 0);
console.log(ca); // 1125