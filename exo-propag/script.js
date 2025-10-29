const parent = document.querySelector('#parent');
const enfant = document.querySelector('#enfant');
const boutons = document.querySelectorAll('.bouton');

boutons.forEach(bouton => {
   bouton.addEventListener('click', (event) => {
       console.log('Bouton click', event);
   });
});

const nwBouton = document.createElement('button');
nwBouton.classList.add('bouton');
nwBouton.textContent = "Nouveau bouton";

enfant.append(nwBouton);

parent.addEventListener('click', (event) => {
    console.log('Bouton click', event.target);
});





// parent.addEventListener('click', (event) => {
//     console.log(event['NEW_PARAMS']);
//     console.log('Parent', event);
// });
// enfant.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('Enfant', event);
// });
// bouton.addEventListener('click', (event) => {
//     event['NEW_PARAMS'] = "J'EXISTE";
//     console.log('Bouton', event);
// });







window.addEventListener('load', () => {
  console.log('Page complètement chargée (images incluses)');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM prêt (avant les images)');
  // Initialisez votre application ici
});


window.addEventListener('resize', () => {
  console.log('Largeur:', window.innerWidth);
  console.log('Hauteur:', window.innerHeight);
});


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  console.log('Scroll:', scrollY);
});