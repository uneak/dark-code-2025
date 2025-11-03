const bouton = document.querySelector('#monBouton');
const bouton2 = document.querySelector('#monBouton2');

// Avec une fonction anonyme
bouton.addEventListener('click', (event) => {
    
    console.log(event.target.dataset.age);
    console.log(event);
});


bouton2.addEventListener('click', (event) => {
    
    console.log(event.target.dataset.age);
    console.log(event);
});
