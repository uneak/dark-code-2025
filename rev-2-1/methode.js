var user = {
    nom: "wikjgkjgh",
    age: 22,
    ville: "Paris"
}

var voiture = {
}






function louerVoiture(voiture, user) {
    let client = getClient(user);
    let caution = getCaution(voiture, user);
    if (caution == true && user.permis == true) {

    }