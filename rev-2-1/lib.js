function logPresentation(prenom, age, ville) {
    console.log(`I'am ${prenom}, j'ai ${age} ans et j'habite à ${ville}`);
}

function testBolosse(user) {
    if (user.voiture && user.moto) {
        return user.nom + " est trop bg";
    } else if (user.ordinateur || user.tv) {
            return user.nom + " est un peu bolosse";
    } else {
        return user.nom + " est trop un bolosse";
    }
        
}


module.exports = {
    testBolosse,
    logPresentation
};