// ============================================
// BIBLIOTHÈQUE DE GESTION DU JEU PICAPIC
// ============================================

// ============================================
// CONSTANTES EXPORTÉES
// ============================================

// États du personnage
const ETATS = {
    PENDING: 'pending',
    ATTACK: 'attack',
    HEAL: 'heal',
    DEAD: 'dead'
};

const CONFIG = {
    // Énergie
    ENERGIE_INITIALE: 10,
    ENERGIE_GAIN_REPOS: 10,        // Points gagnés au repos
    ENERGIE_PERTE_PIC: 5,          // Points perdus lors de Pic Me

    // Délais de désactivation (en millisecondes)
    COOLDOWN_REPOS: 2000,          // Temps de désactivation après Repos
    COOLDOWN_PIC: 1500,            // Temps de désactivation après Pic Me

    // Images selon les états
    IMAGES: {
        [ETATS.PENDING]: 'images/pending.png',
        [ETATS.ATTACK]: 'images/attack.png',
        [ETATS.HEAL]: 'images/heal.png',
        [ETATS.DEAD]: 'images/dead.png'
    }
};

// ============================================
// ÉTAT DU JEU (MODULE PRIVÉ)
// ============================================

let energie = CONFIG.ENERGIE_INITIALE;
let etat = ETATS.PENDING;

// Callbacks pour notifier les changements
const callbacks = {
    onEnergieChange: null,
    onEtatChange: null,
    onGameOver: null
};

// ============================================
// GESTION DE L'ÉTAT
// ============================================

/**
 * Change l'état du personnage
 */
function changerEtat(nouvelEtat) {
    etat = nouvelEtat;
    callbacks.onEtatChange(nouvelEtat);
    console.log(`État changé: ${nouvelEtat}`);
}

/**
 * Modifie l'énergie avec validation des limites
 */
function modifierEnergie(delta) {
    energie += delta;

    // Limiter l'énergie au maximum
    if (CONFIG.ENERGIE_MAX !== null) {
        energie = Math.min(energie, CONFIG.ENERGIE_MAX);
    }

    // Notifier le changement
    callbacks.onEnergieChange(energie);

    // Vérifier si le personnage est mort
    if (energie <= 0) {
        changerEtat(ETATS.DEAD);
        callbacks.onGameOver();
    }

    return energie;
}

// ============================================
// VÉRIFICATIONS D'ÉTAT
// ============================================

/**
 * Vérifie si le personnage est mort
 */
function estMort() {
    if (energie <= 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Vérifie si le personnage peut attaquer (Pic Me)
 */
function peutAttaquer() {
    return !estMort();
}

/**
 * Vérifie si le personnage peut se reposer
 */
function peutSeReposer() {
    return !estMort();
}

// ============================================
// ACTIONS DU JEU
// ============================================

/**
 * Exécute l'action de repos
 */
function actionRepos() {
    if (!peutSeReposer()) {
        console.warn('Impossible de se reposer : personnage mort');
        return false;
    }

    modifierEnergie(CONFIG.ENERGIE_GAIN_REPOS);
    console.log(`Repos ! +${CONFIG.ENERGIE_GAIN_REPOS} énergie. Total: ${energie}`);

    return true;
}

/**
 * Exécute l'action d'attaque (Pic Me)
 */
function actionAttaque() {
    if (!peutAttaquer()) {
        console.warn('Impossible d\'attaquer : personnage mort');
        return false;
    }

    modifierEnergie(-CONFIG.ENERGIE_PERTE_PIC);
    console.log(`Pic Me ! -${CONFIG.ENERGIE_PERTE_PIC} énergie. Total: ${energie}`);

    return true;
}

/**
 * Réinitialise le jeu
 */
function resetGame() {
    energie = CONFIG.ENERGIE_INITIALE;
    changerEtat(ETATS.PENDING);
    callbacks.onEnergieChange(energie);
    console.log('Jeu réinitialisé !');
}
