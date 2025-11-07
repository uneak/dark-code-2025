


// Exemple pratique : traitement de données
const produits = [
  { nom: 'Laptop', prix: 1000, categorie: 'électronique', stock: 5 },
  { nom: 'Souris', prix: 25, categorie: 'électronique', stock: 50 },
  { nom: 'Clavier', prix: 75, categorie: 'électronique', stock: 0 },
  { nom: 'Livre', prix: 15, categorie: 'culture', stock: 20 }
];


// Prix total des produits électroniques en stock

const totalPrixElectroniqueEnStock = produits
  .filter(produit => produit.categorie === 'électronique')
  .filter(produit => produit.stock > 0)
  .reduce((total, produit) => total + (produit.prix * produit.stock), 0);


  console.log(totalPrixElectroniqueEnStock);