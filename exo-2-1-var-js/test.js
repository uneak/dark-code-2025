
var civilite = {
    "male": "homme",
    "female": "femme",
    "other": "autre",
}


var profileList = {
    "uneak": {
        name: "uneak",
        civilite: "male",
        taille: 1.90,
        title: "Maitre",
        email: "uneak@gmail.com",
        hobbies: ["ski", "coder", "dancer"],
    },
    "gaelle": {
        name: "gaelle",
        age: 1.60,
        civilite: "other",
        taille: 1.60,
        title: "Mme.",
        email: "gaelle@gmail.com",
        hobbies: ["couture", "menage", "vaisselle", "cuisine"],
    },
}





document.addEventListener('DOMContentLoaded', function() {
    // Votre code métier ici
    console.log('Le DOM est chargé !');



    addProfile("content", profileList.uneak);
    addProfile("content2", profileList.gaelle);


    // addProfile("content", profiles.uneak);
    // addProfile("content2", profiles.gaelle);
});








