
function testAge(age) {

    if (isNaN(age)) {
        throw new Error(`Veuillez entrer un nombre`);
    }

    if (age <= 0) {
        throw new Error("Veuillez entrer un nombre positif");
    }

    if (age < 12) {
        return "Vous êtes un enfant";
    } else if (age <= 17) {
        return "Vous êtes un adolescent";
    } else if (age <= 59) {
        return "Vous êtes un adulte";
    } else {
        return "Vous êtes un senior";
    }
}

