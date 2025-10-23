function showProfile(userProfile) {
    var returnHtml = "";
    returnHtml += "<div>Civilite : <span>"+userProfile.civilite+"</span></div>";
    returnHtml += "<div>Nom : <span>"+userProfile.name+"</span></div>";
    returnHtml += "<div>Taille : <span>"+userProfile.taille+"</span></div>";
    returnHtml += "<div>Titre : <span>"+userProfile.title+"</span></div>";

    return returnHtml;
}


// addProfile("content", {
//         name: "uneak",
//         civilite: "male",
//         taille: 1.90,
//         title: "Maitre",
//         email: "uneak@gmail.com",
//         hobbies: ["ski", "coder", "dancer"],
//     });


function addProfile(idElement, profile) {
        let p = showProfile(profile);
    document.getElementById(idElement).innerHTML = p;
}