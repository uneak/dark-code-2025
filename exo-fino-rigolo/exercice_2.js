// Exercice 2 : Gestion de produits
// javascriptconst produits = [
//   { id: 1, nom: 'Laptop', prix: 1000, stock: 5, categorie: 'électronique' },
//   { id: 2, nom: 'Souris', prix: 25, stock: 50, categorie: 'électronique' },
//   { id: 3, nom: 'Clavier', prix: 75, stock: 0, categorie: 'électronique' },
//   { id: 4, nom: 'Livre', prix: 15, stock: 20, categorie: 'culture' }
// ];

// Filtrez les produits en stock
// Trouvez tous les produits électroniques
// Calculez le prix moyen
// Triez par prix décroissant
// Créez un objet groupé par catégorie



const produits = [
    { id: 1, nom: 'Laptop', prix: 1000, stock: 5, categorie: 'electronique' },
    { id: 2, nom: 'Souris', prix: 25, stock: 50, categorie: 'electronique' },
    { id: 3, nom: 'Clavier', prix: 75, stock: 0, categorie: 'electronique' },
    { id: 4, nom: 'Livre', prix: 15, stock: 20, categorie: 'culture' },
];



const produitsEnStock = produits.filter((produit) => { return produit.stock > 0; });
// console.log(produitsEnStock);


const produitsElectroniques = produits.filter((produit) => { return produit.categorie === 'électronique'; });
// console.log(produitsElectroniques);

const prixMoyen = produits.reduce((acc, produit) => {
    return acc + produit.prix;
}, 0) / produits.length;
// console.log(prixMoyen);


const produitsTrie = [...produits];
produitsTrie.sort((a, b) => {
    return b.prix - a.prix;
});
// console.log(produitsTrie);


const produitsGroupes = produits.reduce((acc, produit) => {
    if (!acc[produit.categorie]) {
        acc[produit.categorie] = [];
    }
    acc[produit.categorie].push(produit);
    return acc;
}, {});
console.log(produitsGroupes);

