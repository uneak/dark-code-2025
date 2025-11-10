


// Exemple pratique : traitement de données
const produits = [
  { nom: 'Laptop', prix: 1000, categorie: 'électronique', stock: 5 },
  { nom: 'Souris', prix: 25, categorie: 'électronique', stock: 50 },
  { nom: 'Clavier', prix: 75, categorie: 'électronique', stock: 0 },
  { nom: 'Livre', prix: 15, categorie: 'culture', stock: 20 }
];


// Prix total des produits électroniques en stock

const newArray = produits.map(produit => {
  return "Marc " + produit.nom + " a un prix de " + produit.prix * produit.stock;
})


console.log(produits);
console.log(newArray);