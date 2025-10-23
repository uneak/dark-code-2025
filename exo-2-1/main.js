const ParcAuto = require("./parc-auto.js");
const Voiture = require("./voiture.js");

// Créer un gestionnaire de voitures
const parc = new ParcAuto();



const voiture1 = new Voiture("vOITURE SPE", 4, true, 15000, {
    Conducteur: "Marc",
    Passager: "JC",
    Arriere: "Marsu",
    Coffre: "Gaelle"
});


parc.ajouterVoitureClass(voiture1);

// Ajouter plusieurs voitures avec kilométrage ET places dès le constructeur
const audi = parc.ajouterVoiture("Audi", 4, true, 15000, {
    Conducteur: "Marc",
    Passager: "JC",
    Arriere: "Marsu",
    Coffre: "Gaelle"
});

const bmw = parc.ajouterVoiture("BMW", 4, false, 32000, {
    Conducteur: "Sophie",
    Passager: "Thomas"
});

const mercedes = parc.ajouterVoiture("Mercedes", 4, true, 8500, {
    Conducteur: "Alice"
});


// Afficher toutes les voitures
parc.afficherToutesLesVoitures();

// Afficher les statistiques de kilométrage du parc
parc.afficherStatistiquesKilometrage();

// Libérer une place
console.log("\n--- Libération d'une place ---");
audi.libererPlace("Coffre");

// Ajouter du kilométrage à une voiture
console.log("\n--- Ajout de kilométrage ---");
audi.ajouterKilometrage(500);
bmw.ajouterKilometrage(1200);

// Afficher les statistiques mises à jour
parc.afficherStatistiquesKilometrage();

// Afficher l'Audi mise à jour
console.log("\n--- Audi mise à jour ---");
audi.afficher();