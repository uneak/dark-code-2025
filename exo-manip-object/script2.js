// Tableau de produits avec leurs caractéristiques
const produits = [
    { nom: 'Laptop', prix: 1000, stock: 5 },
    { nom: 'Souris', prix: 25, stock: 50 },
    { nom: 'Clavier', prix: 75, stock: 0 },
    { nom: 'Écran', prix: 300, stock: 10 },
    { nom: 'Yaplu', prix: 300, stock: 0 }
];



// Calculer le prix moyen de tous les produits
// 1. reduce additionne tous les prix (valeur initiale = 0)
// 2. On divise par le nombre de produits
const prixMoyen = produits.reduce((acc, produit) => acc + produit.prix, 0) / produits.length;

console.log({ prixMoyen });

// Calculer la valeur totale du stock
// Pour chaque produit : quantité en stock × prix unitaire
// Exemple : 5 Laptops × 1000€ = 5000€
const valeurStock = produits.reduce((acc, produit) => {
    return acc + (produit.stock * produit.prix);
}, 0);

console.log({ valeurStock });

// Trouver le prix le plus élevé parmi tous les produits
// Compare chaque prix avec l'accumulateur et garde le plus grand
// Ternaire : si acc < prix actuel, on prend le prix actuel, sinon on garde acc
const higherPrice = produits.reduce((acc, produit) => {
    return acc < produit.prix ? produit.prix : acc;
}, 0);

console.log({ higherPrice });


// Calculer le nombre total d'articles en stock
// Additionne toutes les quantités disponibles
const totalStock = produits.reduce((acc, produit) => {
    return acc + produit.stock;
}, 0);

console.log({ totalStock });

// Filtrer les produits chers (prix > 100€)
// filter() crée un nouveau tableau avec seulement les produits qui passent le test
const expensiveProducts = produits.filter((produit) => { return produit.prix > 100 });

console.log({ expensiveProducts });


// Équivalent avec une boucle for...of (moins élégant)
// let array = [];
// for (const produit of produits) {
//     if (produit.prix > 100) {
//         array.push(produit);
//     }
// }
// console.log(array);


// Filtrer les produits en rupture de stock (stock <= 0)
// filter() est la méthode idiomatique pour filtrer un tableau
const noStockProducts = produits.filter((produit) => produit.stock <= 0);

// Filtrer les produits en rupture de stock avec reduce
// Démontre qu'on peut reproduire filter() avec reduce (mais c'est moins idiomatique)
// reduce peut tout faire, mais filter/map sont plus lisibles pour leur usage spécifique
const noStockProductsReducer = produits.reduce((acc, produit) => {
    if (produit.stock <= 0) {
        acc.push(produit); // Ajouter au tableau accumulateur si pas de stock
    }
    return acc;
}, []); // [] = tableau vide initial (contrairement aux exemples précédents qui utilisent 0)

console.log({ noStockProducts });

console.log({ noStockProductsReducer });




