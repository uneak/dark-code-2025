/**
 * Exercice 1 : Compteur avec boutons et raccourcis clavier
 *
 * Gère un compteur avec les fonctionnalités suivantes :
 * - Incrémenter avec le bouton + ou la flèche haut
 * - Décrémenter avec le bouton - ou la flèche bas
 * - Réinitialiser avec le bouton Reset
 * - Synchronise le nombre de billes 3D avec la valeur du compteur
 */

// Variables globales
let compteur = 0;

// Récupération des éléments du DOM
const affichageCompteur = document.getElementById('compteur');
const btnPlus = document.getElementById('btn-plus');
const btnMoins = document.getElementById('btn-moins');
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
    compteur--;
    mettreAJourAffichage();
}

/**
 * Réinitialise le compteur à 0
 */
function reinitialiser() {
    compteur = 0;
    mettreAJourAffichage();
}

// ==================== GESTION DES APPUIS CONTINUS ====================

// Variables pour tracking des appuis
let keysPressed = {}; // Pour tracker les touches enfoncées
let buttonPressed = null; // Bouton actuellement maintenu
let pressStartTime = 0; // Moment où l'appui a commencé
let pressInterval = null; // Intervalle d'ajout continu

/**
 * Calcule la fréquence d'ajout basée sur le temps d'appui
 * Plus on appuie longtemps, plus rapide c'est
 */
function calculatePressFrequency(elapsedTime) {
    // Fréquence minimale: 100ms (10 billes/sec)
    // Fréquence augmente exponentiellement: après 1s, 50ms (20 billes/sec), après 2s, 20ms (50 billes/sec)
    const minFrequency = 100; // ms entre chaque ajout
    const maxFrequency = 10; // ms minimum

    // Accélération exponentielle: fréquence = 100 * e^(-0.003 * temps)
    const frequency = Math.max(maxFrequency, minFrequency * Math.exp(-0.003 * elapsedTime));
    return frequency;
}

/**
 * Démarre l'ajout continu
 */
function startContinuousAdd(action) {
    pressStartTime = Date.now();
    pressInterval = setInterval(() => {
        const elapsedTime = Date.now() - pressStartTime;
        const nextFrequency = calculatePressFrequency(elapsedTime);

        if (action === 'increment') {
            incrementer();
        } else if (action === 'decrement') {
            decrementer();
        }

        // Recalculer la fréquence et adapter l'intervalle
        clearInterval(pressInterval);
        pressInterval = setInterval(() => {
            const newElapsedTime = Date.now() - pressStartTime;
            const newFrequency = calculatePressFrequency(newElapsedTime);

            if (action === 'increment') {
                incrementer();
            } else if (action === 'decrement') {
                decrementer();
            }
        }, nextFrequency);
    }, calculatePressFrequency(0));
}

/**
 * Arrête l'ajout continu
 */
function stopContinuousAdd() {
    if (pressInterval) {
        clearInterval(pressInterval);
        pressInterval = null;
    }
    buttonPressed = null;
}

// ==================== ÉVÉNEMENTS DES BOUTONS ====================

// Bouton Plus
btnPlus.addEventListener('click', incrementer);
btnPlus.addEventListener('mousedown', () => {
    stopContinuousAdd(); // Arrêter si autre bouton était enfoncé
    startContinuousAdd('increment');
});
btnPlus.addEventListener('mouseup', stopContinuousAdd);
btnPlus.addEventListener('mouseleave', stopContinuousAdd);

// Bouton Moins
btnMoins.addEventListener('click', decrementer);
btnMoins.addEventListener('mousedown', () => {
    stopContinuousAdd(); // Arrêter si autre bouton était enfoncé
    startContinuousAdd('decrement');
});
btnMoins.addEventListener('mouseup', stopContinuousAdd);
btnMoins.addEventListener('mouseleave', stopContinuousAdd);

// Bouton Reset (simple click)
btnReset.addEventListener('click', reinitialiser);

// ==================== ÉVÉNEMENTS CLAVIER ====================

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && !keysPressed['ArrowUp']) {
        event.preventDefault();
        keysPressed['ArrowUp'] = true;

        // Premier ajout immédiat
        incrementer();

        // Puis ajout continu
        setTimeout(() => {
            if (keysPressed['ArrowUp']) {
                startContinuousAdd('increment');
            }
        }, 200); // Délai avant ajout continu (200ms)
    } else if (event.key === 'ArrowDown' && !keysPressed['ArrowDown']) {
        event.preventDefault();
        keysPressed['ArrowDown'] = true;

        // Premier ajout immédiat
        decrementer();

        // Puis ajout continu
        setTimeout(() => {
            if (keysPressed['ArrowDown']) {
                startContinuousAdd('decrement');
            }
        }, 200); // Délai avant ajout continu (200ms)
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        keysPressed['ArrowUp'] = false;
        stopContinuousAdd();
    } else if (event.key === 'ArrowDown') {
        keysPressed['ArrowDown'] = false;
        stopContinuousAdd();
    }
});

// Initialiser l'affichage du compteur (0 par défaut)
affichageCompteur.textContent = compteur;
