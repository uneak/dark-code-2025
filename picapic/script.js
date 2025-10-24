// ============================================
// INTERFACE UTILISATEUR - PICAPIC
// ============================================

// ============================================
// ÉLÉMENTS DOM
// ============================================

const $scoreElement = document.getElementById('score');
const $btnRepos = document.getElementById('btn-right');
const $btnPic = document.getElementById('btn-left');
const $playerImg = document.getElementById('player-img');
const $gameOverElement = document.getElementById('game-over');
const $btnRestart = document.getElementById('btn-restart');
const $controls = document.querySelector('.controls');


// ============================================
// FONCTIONS UI
// ============================================

/**
 * Met à jour l'affichage du score
 */
function updateScore(energie) {
    $scoreElement.textContent = energie;
}

/**
 * Met à jour l'image du personnage selon l'état
 */
function updateImage(etat) {
    $playerImg.src = CONFIG.IMAGES[etat];
}

/**
 * Affiche l'écran Game Over
 */
function afficherGameOver() {
    $btnPic.disabled = true;
    $btnRepos.disabled = true;

    // Masquer les éléments de jeu
    $scoreElement.style.display = 'none';
    $controls.style.display = 'none';

    // Afficher Game Over
    $gameOverElement.classList.remove('hidden');
}

/**
 * Cache l'écran Game Over
 */
function cacherGameOver() {
    $gameOverElement.classList.add('hidden');

    // Réafficher les éléments de jeu
    $scoreElement.style.display = 'block';
    document.querySelector('.controls').style.display = 'flex';
}

/**
 * Vérifie et met à jour l'état des boutons selon l'énergie
 */
function verifierEtatBoutons() {
    // Ne rien faire si le personnage est mort
    if (estMort()) {
        return;
    }

    // Les boutons sont disponibles si le personnage n'est pas mort
    $btnPic.disabled = !peutAttaquer();
    $btnRepos.disabled = !peutSeReposer();
}

/**
 * Désactive un bouton pendant un certain temps et change l'état
 */
function desactiverTemporairement(bouton, duree, etat, etatRetour = ETATS.PENDING) {
    bouton.disabled = true;
    changerEtat(etat);

    setTimeout(() => {
        bouton.disabled = false;

        // Retourner à l'état par défaut seulement si pas mort
        if (!estMort()) {
            changerEtat(etatRetour);
        }

        verifierEtatBoutons(); // Revérifier les conditions après réactivation
    }, duree);
}

// ============================================
// GESTIONNAIRES D'ÉVÉNEMENTS
// ============================================

/**
 * Gestionnaire du bouton Repos
 */
function onReposClick() {
    const success = actionRepos();

    // Ne changer l'état que si l'action a réussi
    if (success && !estMort()) {
        desactiverTemporairement($btnRepos, CONFIG.COOLDOWN_REPOS, ETATS.HEAL);
    }
}

/**
 * Gestionnaire du bouton Pic Me
 */
function onPicClick() {
    const success = actionAttaque();

    // Ne changer l'état que si l'action a réussi
    if (success && !estMort()) {
        desactiverTemporairement($btnPic, CONFIG.COOLDOWN_PIC, ETATS.ATTACK);
    }
}

/**
 * Gestionnaire du bouton Recommencer
 */
function onRestartClick() {
    resetGame();
    cacherGameOver();

    // Réactiver les boutons
    $btnRepos.disabled = false;
    verifierEtatBoutons();
}

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // Configurer les callbacks du jeu
    callbacks.onEnergieChange = (energie) => {
        updateScore(energie);
        verifierEtatBoutons();
    };

    callbacks.onEnergieChange(50);

    
    callbacks.onEtatChange = (etat) => {
        updateImage(etat);
    };
    callbacks.onGameOver = () => {
        afficherGameOver();
        console.log('Game Over - Pikachu est KO !');
    };

    // Initialiser l'affichage
    onRestartClick();

    // Événements des boutons
    $btnRepos.addEventListener('click', onReposClick);
    $btnPic.addEventListener('click', onPicClick);
    $btnRestart.addEventListener('click', onRestartClick);

    console.log('Jeu initialisé avec la configuration:', CONFIG);
});
