function creerCarte(titre, description, prix, enStock = true) {
  // À COMPLÉTER

  // 1. Affichez "=== CARTE PRODUIT ==="
  // 2. Affichez "Titre : [valeur de titre]"
  // 3. Affichez "Description : [valeur de description]"
  // 4. Affichez "Prix : [valeur de prix]€"
  // 5. Affichez "En stock : [Oui/Non selon enStock]"
  // 6. Affichez "====================="


  console.log("=== CARTE PRODUIT ===");
  console.log(`Titre : ${titre}`);
  console.log(`Description : ${description}`);
  console.log(`Prix : ${prix}€`);
  console.log(!enStock ? "En rupture" : "En stock");
  console.log("====================");
}

// Testez avec ces appels
creerCarte("Laptop", "Ordinateur portable 15 pouces", 999);
creerCarte("Souris", "Souris sans fil", 25, false);
creerCarte("Clavier", "Clavier mécanique RGB", 120, true);