const Voiture = require("./voiture.js");

class ParcAuto {
    constructor() {
        this.voitures = [];
    }

    ajouterVoitureClass(voiture) {
        this.voitures.push(voiture);
        console.log(`Voiture ${voiture.marque} ajoutée avec succès.`);
        return voiture;
    }


    ajouterVoiture(marque, roues, nitro, kilometrage = 0, places = {}) {
        const voiture = new Voiture(marque, roues, nitro, kilometrage, places);
        this.voitures.push(voiture);
        console.log(`Voiture ${marque} ajoutée avec succès.`);
        return voiture;
    }

    supprimerVoiture(index) {
        if (index >= 0 && index < this.voitures.length) {
            const voiture = this.voitures.splice(index, 1)[0];
            console.log(`Voiture ${voiture.marque} supprimée.`);
        } else {
            console.log("Index invalide.");
        }
    }

    afficherToutesLesVoitures() {
        console.log("\n=== Liste des voitures ===");
        if (this.voitures.length === 0) {
            console.log("Aucune voiture enregistrée.");
        } else {
            this.voitures.forEach((voiture, index) => {
                console.log(`\nVoiture ${index + 1}:`);
                voiture.afficher();
            });
        }
    }

    getNombreVoitures() {
        return this.voitures.length;
    }

    getVoiture(index) {
        if (index >= 0 && index < this.voitures.length) {
            return this.voitures[index];
        }
        return null;
    }

    getKilometrageMoyen() {
        if (this.voitures.length === 0) {
            return 0;
        }
        const total = this.voitures.reduce((sum, voiture) => sum + voiture.getKilometrage(), 0);
        return total / this.voitures.length;
    }

    getKilometrageTotal() {
        return this.voitures.reduce((sum, voiture) => sum + voiture.getKilometrage(), 0);
    }

    afficherStatistiquesKilometrage() {
        console.log("\n=== Statistiques du parc ===");
        console.log(`Nombre de voitures: ${this.voitures.length}`);
        console.log(`Kilométrage total: ${this.getKilometrageTotal()} km`);
        console.log(`Kilométrage moyen: ${this.getKilometrageMoyen().toFixed(2)} km`);
    }
}

module.exports = ParcAuto;
