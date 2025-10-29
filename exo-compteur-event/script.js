/**
 * Exercice 1 : Compteur avec boutons et raccourcis clavier
 *
 * Gère un compteur avec les fonctionnalités suivantes :
 * - Incrémenter (+1) avec le bouton + ou la flèche haut
 * - Décrémenter (-1) avec le bouton - ou la flèche bas
 * - Incrémenter (+10) avec le bouton +10
 * - Décrémenter (-10) avec le bouton -10
 * - Réinitialiser à 0 avec le bouton Reset
 * - Synchronise le nombre de billes 3D avec la valeur du compteur
 */

// Variables globales
let compteur = 0;

// Récupération des éléments du DOM
const affichageCompteur = document.getElementById('compteur');
const btnPlus = document.getElementById('btn-plus');
const btnMoins = document.getElementById('btn-moins');
const btnPlus10 = document.getElementById('btn-plus10');
const btnMoins10 = document.getElementById('btn-moins10');
const btnReset = document.getElementById('btn-reset');

/**
 * Met à jour l'affichage du compteur dans le DOM
 * et synchronise le nombre de billes 3D
 */
function mettreAJourAffichage() {
    affichageCompteur.textContent = compteur;

    // Synchroniser avec le moteur physique
    if (typeof updateBallCount !== 'undefined') {
        updateBallCount(Math.max(0, compteur));
    }
}

/**
 * Incrémente le compteur de 1
 */
function incrementer() {
    compteur++;
    mettreAJourAffichage();
}

/**
 * Décrémente le compteur de 1
 */
function decrementer() {
    compteur = Math.max(0, compteur - 1);
    mettreAJourAffichage();
}

/**
 * Incrémente le compteur de 10
 */
function incrementer10() {
    compteur += 10;
    mettreAJourAffichage();
}

/**
 * Décrémente le compteur de 10
 */
function decrementer10() {
    compteur = Math.max(0, compteur - 10);
    mettreAJourAffichage();
}

/**
 * Réinitialise le compteur à 0
 */
function reinitialiser() {
    compteur = 0;
    mettreAJourAffichage();
}

// ==================== ÉVÉNEMENTS DES BOUTONS ====================

// Bouton Plus (+1)
btnPlus.addEventListener('click', incrementer);

// Bouton Moins (-1)
btnMoins.addEventListener('click', decrementer);

// Bouton Plus 10 (+10)
btnPlus10.addEventListener('click', incrementer10);

// Bouton Moins 10 (-10)
btnMoins10.addEventListener('click', decrementer10);

// Bouton Reset
btnReset.addEventListener('click', reinitialiser);

// ==================== ÉVÉNEMENTS CLAVIER ====================

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        incrementer();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        decrementer();
    }
});

// Initialiser l'affichage du compteur (0 par défaut)
affichageCompteur.textContent = compteur;
