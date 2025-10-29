// === SÉLECTION DES ÉLÉMENTS DOM ===
// Récupération de l'affichage du compteur
const $compteur = document.getElementById('compteur');
// Boutons pour augmenter/diminuer le compteur
const $btnPlus = document.getElementById('btn-plus');
const $btnMoins = document.getElementById('btn-moins');
// Bouton pour réinitialiser le compteur
const $btnReset = document.getElementById('btn-reset');
// Boutons pour augmenter/diminuer de 10
const $btnMoins10 = document.getElementById('btn-moins10');
const $btnPlus10 = document.getElementById('btn-plus10');

// === VARIABLE D'ÉTAT ===
// Valeur actuelle du compteur
let compteur = 0;

/**
 * Met à jour le compteur en ajoutant une valeur donnée
 * @param {number} step - Le nombre à ajouter (par défaut 1)
 */
function updateCounter(step = 1) {
    setCounter(compteur + step);
}

/**
 * Définit la valeur du compteur et met à jour l'affichage
 * @param {number} count - La nouvelle valeur du compteur
 */
function setCounter(count) {
    compteur = count;
    $compteur.textContent = compteur;
}

// Initialise le compteur à 0
setCounter(0);

// === ÉCOUTEURS D'ÉVÉNEMENTS SOURIS ===
// +1 en cliquant sur le bouton plus
$btnPlus.addEventListener('click', () => updateCounter(1));
// -1 en cliquant sur le bouton moins
$btnMoins.addEventListener('click', () => updateCounter(-1));
// Réinitialise à 0 en cliquant sur le bouton reset
$btnReset.addEventListener('click', () => setCounter(0));
// -10 en cliquant sur le bouton moins 10
$btnMoins10.addEventListener('click', () => updateCounter(-10));
// +10 en cliquant sur le bouton plus 10
$btnPlus10.addEventListener('click', () => updateCounter(10));

// === ÉCOUTEURS D'ÉVÉNEMENTS CLAVIER ===
// Écoute des touches du clavier pour contrôler le compteur
document.addEventListener('keydown', (event) => {
    // Empêche le comportement par défaut du navigateur
    event.preventDefault();

    // Flèche haut : augmente le compteur
    if (event.key === 'ArrowUp') {

        // Shift + Flèche haut : augmente de 10
        if (event.shiftKey) {
            $btnPlus10.click();
        } else {
            // Flèche haut seule : augmente de 1
            $btnPlus.click();
        }

    // Flèche bas : diminue le compteur
    } else if (event.key === 'ArrowDown') {

        // Shift + Flèche bas : diminue de 10
        if (event.shiftKey) {
            $btnMoins10.click();
        } else {
            // Flèche bas seule : diminue de 1
            $btnMoins.click();
        }

    // Touche 'r' : réinitialise le compteur
    } else if (event.key === 'r') {
        $btnReset.click();
    }

});