


document.addEventListener('DOMContentLoaded', () => {
  // Ce code ne s'exécutera QUE lorsque le DOM sera prêt.

    // console.log({document});
    const titre = document.querySelector('#titre-principal');

    // textContent : tout le texte brut (sans HTML)

console.log(titre.textContent); 

// "Bonjour tout le monde"

// innerHTML : contenu HTML complet

console.log(titre.innerHTML); 

// "<p>Bonjour <strong>tout le monde</strong></p>"

// innerText : texte visible (tient compte du CSS)

console.log(titre.innerText); 

// "Bonjour tout le monde"


});



