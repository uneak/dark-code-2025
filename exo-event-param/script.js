

const bouton = document.getElementById('btn');


bouton.addEventListener('click', (event) => {
  console.log(event);           // Objet complet
  console.log(event.type);      // "click"
  console.log(event.target);    // L'élément cliqué
  event.target.style.color = "red";
  console.log(event.timeStamp); // Moment du clic
});


document.addEventListener('copy', (e) => {
    console.log(e);
    const texte = e.clipboardData.getData('text/plain');
    console.log("method man",texte);

    const texteSelectionne = window.getSelection().toString();
    console.log('Tu veux copier:', texteSelectionne);


    e.preventDefault(); // Empêche la sauvegarde du navigateur
    console.log('Ctrl + C court-circuitée !');
});