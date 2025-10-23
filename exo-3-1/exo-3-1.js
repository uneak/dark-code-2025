


document.addEventListener('DOMContentLoaded', () => {
  // Ce code ne s'exécutera QUE lorsque le DOM sera prêt.

    const titre = document.getElementById('titre-principal');
    titre.innerHTML = "Bonjour <i>Marc</i> !";
    
    titre.style.cursor = "pointer";
    titre.onclick = () => alert("Bonjour Marc !");

    console.log({titre});

    titre.style.color = "blue";             // Change la couleur
});



