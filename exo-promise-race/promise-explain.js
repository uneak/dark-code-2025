
class BelAmour {
    constructor(firstName, lastName, bithYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bithYear = bithYear;
    }

    faireLaCuisine(variable, {sel, poivre, tomates, carottes, oignons}) {
        console.log("Faire la cuisine...", (sel + poivre + tomates + carottes + oignons));
    }

    getName() {
        return this.name;
    }
}


function ameliore(belAmour) {
    belAmour.firstName = "Tata";
}


const gaelle = new BelAmour("Gaëlle", "Charles-Belamour", 2000);
ameliore(gaelle);
gaelle.lastName = "Toto";

console.log(`${gaelle.firstName} ${gaelle.lastName} est ${gaelle.bithYear} ans.`);




