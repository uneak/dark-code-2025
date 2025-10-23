class Voiture {
    constructor(marque, roues, nitro, kilometrage = 0, places = {}) {
        this.marque = marque;
        this.roues = roues;
        this.nitro = nitro;
        this.kilometrage = kilometrage;
        this.places = {
            Conducteur: places.Conducteur || "",
            Passager: places.Passager || "",
            Arriere: places.Arriere || "",
            Coffre: places.Coffre || ""
        };
    }

    afficher() {
        console.log(this.marque);
        console.log(this.roues);
        console.log(this.nitro);
        console.log(`${this.kilometrage} km`);
        this.afficherPlaces();
    }

    afficherPlaces() {
        console.log("\nPlaces:");
        for (let place in this.places) {
            const user = this.places[place] || "Vide";
            console.log(`  ${place}: ${user}`);
        }
    }

    assignerPlace(nomPlace, nomUser) {
        if (this.places.hasOwnProperty(nomPlace)) {
            this.places[nomPlace] = nomUser;
            console.log(`${nomUser} assigné à la place ${nomPlace} dans ${this.marque}`);
        } else {
            console.log(`Place "${nomPlace}" n'existe pas.`);
        }
    }

    libererPlace(nomPlace) {
        if (this.places.hasOwnProperty(nomPlace)) {
            const ancien = this.places[nomPlace];
            this.places[nomPlace] = "";
            console.log(`Place ${nomPlace} libérée (${ancien})`);
        } else {
            console.log(`Place "${nomPlace}" n'existe pas.`);
        }
    }

    ajouterKilometrage(km) {
        if (km > 0) {
            this.kilometrage += km;
            console.log(`${km} km ajoutés à ${this.marque}. Total: ${this.kilometrage} km`);
        }
    }

    getKilometrage() {
        return this.kilometrage;
    }
}

module.exports = Voiture;