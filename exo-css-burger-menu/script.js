document.addEventListener('DOMContentLoaded', () => {
    



        // Le 'defer' s'assure que le HTML est chargé avant que le script ne s'exécute
    // Menu hamburger
    const $menu = document.querySelector('#menu');
    const $boutonMenu = document.querySelector('#toggle-menu');

    let toggle = false;

    $boutonMenu.addEventListener('click', () => {
        if (toggle === false) {
            $menu.classList.add('ouvert');
            toggle = true;
        } else {
            $menu.classList.remove('ouvert');
            toggle = false;
        }
    });

    document.addEventListener('click', event => {
        console.log(event.target);
        if (event.target.id !== 'toggle-menu') {
            $menu.classList.remove('ouvert');
            toggle = false;
        }
    });

    // Onglets actifs
    const onglets = document.querySelectorAll('.onglet');

    onglets.forEach(onglet => {
      onglet.addEventListener('click', () => {
        // Retirer "actif" de tous les onglets
        onglets.forEach(element => element.classList.remove('actif'));
        // Ajouter "actif" à l'onglet cliqué
        onglet.classList.add('actif');
      });
    });

    // Afficher/masquer
    const modal = document.querySelector('#modal');
    const btnOuvrir = document.querySelector('#ouvrir-modal');
    const btnFermer = document.querySelector('#fermer-modal');

    btnOuvrir.addEventListener('click', () => {
      modal.classList.remove('cache');
    });

    btnFermer.addEventListener('click', () => {
      modal.classList.add('cache');
    });





    // let toggle = false;

    const element = document.querySelector('#monDiv');
    console.log({element});

    element.onclick = () => {
        element.classList.toggle('actif');
        // if (toggle === false) {
        //     element.classList.add('actif');
        //     toggle = true;
        // } else {
        //     element.classList.remove('actif');
        //     toggle = false;
        // }
        console.log(element.className);
    }

});