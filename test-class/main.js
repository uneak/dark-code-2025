class Moteur {
    constructor(modele, vitesse, volume, consume) {
        this.modele = modele;
        this.vitesse = vitesse;
        this.carburantVolume = volume; // en litres
        this.carburantConsume = consume; // en litres pour 100km
    }

    consommer(litres) {
        console.log("consommer", litres);
        this.carburantVolume -= litres;
    }

    isCarburantEmpty() {
        return this.carburantVolume === 0;
    }


    afficher() {
        return `Moteur de type ${this.modele} a une vitesse de ${this.vitesse} km/h`;
    }
}

class Voiture {
    constructor(modele, couleur, moteur) {
        this.modele = modele;
        this.couleur = couleur;
        this.moteur = moteur;
        this.position = 0;
    }

    afficher() {
        return `Voiture de type ${this.modele} et de couleur ${this.couleur}, position ${this.position} Km et moteur ${this.moteur.modele}, vitesse ${this.moteur.vitesse} km/h, consomme ${this.moteur.carburantConsume} litres par 100km, reste ${this.moteur.carburantVolume} litres`;
    }

    rouler(hours) {
        const distance = this.moteur.vitesse * hours;
        const volCarburant = distance * (this.moteur.carburantConsume / 100);
        this.moteur.consommer(volCarburant)
        this.position += distance;
    }

}

const fusee = new Moteur('Fusee', 200, 200, 10);
const v8 = new Moteur('V8', 120, 200, 10);
const v6 = new Moteur('V6', 100, 200, 5);

const audi = new Voiture('Audi 1', 'rouge', v8);
const volvo = new Voiture('Volvo 40', 'bleu', v6);
const arianne = new Voiture('Arriane', 'blanche', fusee);

audi.rouler(1);
volvo.rouler(1);

console.log(audi.afficher());
console.log(volvo.afficher());
console.log(arianne.afficher());