const IMAGES = {
    'normal': "images/pending.png",
    'attack': "images/attack.png",
    'repos': "images/heal.png",
    'mort': "images/dead.png",
};

const CONFIG = {
    ENERGIE_INITIALE: 10,
    ATTACK_ENERGIE_LOST: -5,        // Points gagnés au repos
    REPOS_ENERGIE_GAIN: 10,        // Points perdus lors de Pic Me
    ATTACK_DURATION: 1000,        // Points gagnés au repos
    REPOS_DURATION: 1500,          // Points perdus lors de Pic Me
};


let energie = CONFIG.ENERGIE_INITIALE;
let etat = "normal";

function updateImage(etat) {
    $playerImg.src = IMAGES[etat];
}

function udpadeButtons(etat) {
    if (etat === "attack") {
        $btnPicMe.disabled = true;
        $btnRepos.disabled = false;
        return;
    } else if (etat === "repos") {
        $btnPicMe.disabled = false;
        $btnRepos.disabled = true;
        return;
    } else if (etat === "mort") {
        $btnPicMe.disabled = true;
        $btnRepos.disabled = true;
        return;
    } else { // etat === "normal"
        $btnPicMe.disabled = false;
        $btnRepos.disabled = false;
        return;
    }
}

function doNormal() {
    console.log("normal");

    const state = 'normal';
    updateImage(state);
    udpadeButtons(state);
}

function doAttack() {
    console.log("attack");

    const state = 'attack';
    updateImage(state);
    udpadeButtons(state);

    updateEnergie(CONFIG.ATTACK_ENERGIE_LOST);
    if (energie > 0) setTimeout(doNormal, CONFIG.ATTACK_DURATION);
}

function doRepos() {
    console.log("repos");

    const state = 'repos';
    updateImage(state);
    udpadeButtons(state);

    updateEnergie(CONFIG.REPOS_ENERGIE_GAIN);
    if (energie > 0) setTimeout(doNormal, CONFIG.REPOS_DURATION);
}


function doMort() {
    console.log("mort");

    const state = 'mort';
    updateImage(state);
    udpadeButtons(state);
    $btnRestart.classList.remove('hidden');
    $gameOver.classList.remove('hidden');
}

// ajouter un chiffre a l'energie actuelle
function updateEnergie(diff) {
    const nEnergy = energie + diff;
    setEnergie(nEnergy);
}

// definir un chiffre pour l'energie
function setEnergie(newEnergie) {
    energie = newEnergie;
    $score.textContent = energie;

    if (energie <= 0) {
        energie = 0;
        $score.textContent = 0
        doMort();
    }

}



document.addEventListener('DOMContentLoaded', () => {
    $playerImg = document.getElementById('player-img');
    $btnPicMe = document.getElementById('btn-left');
    $btnRepos = document.getElementById('btn-right');
    $btnRestart = document.getElementById('btn-center');
    $gameOver = document.getElementById('game-over');

    $score = document.getElementById('score');

    $btnPicMe.addEventListener('click', () => {
        doAttack();
    });

    $btnRepos.addEventListener('click', () => {
        doRepos();
    });

    $btnRestart.addEventListener('click', () => {
        setEnergie(CONFIG.ENERGIE_INITIALE);
        $btnRestart.classList.add('hidden');
        $gameOver.classList.add('hidden');
        doNormal();
    });

    $score.textContent = energie;
    doNormal();
});