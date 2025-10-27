class Produit {
    constructor(nom, image, prix, poid) {
        this.nom = nom;
        this.image = image;
        this.prix = prix;
        this.poid = poid;
    }
}


class Remise {
    constructor(code, pourcentage) {
        this.code = code;
        this.pourcentage = pourcentage;
    }

    calculRemise(prix) {
        return prix * this.pourcentage / 100;
    }
}


class RemiseDeOuf extends Remise {
    calculRemise(prix) {
        if (prix >= 100) {
            return prix * 0.5;
        } else {
            return 0;
        }
    }
}



class Panier {
    constructor() {
        this.lignesDeCommande = [];
        this.remise = null;
    }

    ajouteCommande(qte, produit, remise = null) {
        this.lignesDeCommande.push({
            qte: qte,
            produit: produit,
            remise: remise
        });
    }

    ajouteRemise(remise) {
        this.remise = remise;
    }

    calculerTotal() {
        let total = 0;
        this.lignesDeCommande.forEach(ligneDeCommande => {
            let totalLigne = ligneDeCommande.qte * ligneDeCommande.produit.prix;
            let remiseLigne = 0;

            if (ligneDeCommande.remise !== null) {
                remiseLigne = ligneDeCommande.remise.calculRemise(totalLigne);
            }

            total += totalLigne - remiseLigne;
        });

        if (this.remise !== null) {
            total -= this.remise.calculRemise(total);
        }

        return total;
    }
}







let orange = new Produit("Orange", "images/orange.png", 10, 100);
let pomme = new Produit("Pomme", "images/pomme.png", 100, 100);
let raisin = new Produit("Raisin", "images/raisin.png", 10, 100);

let remise50 = new Remise("RESMISON!!!50", 50);
let remise10 = new Remise("PETITE-REMISE", 10);
let remiseOuf = new RemiseDeOuf("2OUF", 90);




const panier = new Panier();
panier.ajouteCommande(1, orange);
panier.ajouteCommande(1, pomme, remiseOuf);
panier.ajouteCommande(1, raisin);
panier.ajouteRemise(remise50);

panier.calculerTotal();


console.log(panier.lignesDeCommande);
console.log(panier.remise);
console.log(panier.calculerTotal());




