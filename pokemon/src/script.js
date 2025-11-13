
const gameState = {
    curentPlayer: 1,
    currentTurn: 1,
    isOver: false
};

// Constantes de jeu
const MAX_MANA = 50;
const MAX_BASE_STAT = 255; 

// Mapping des couleurs de type pour le design
const TYPE_COLORS = {
    'electric': '#F7D02C', // Jaune Pikachu
    'grass': '#7AC74C',    // Vert Bulbasaure
    'fire': '#EE8130',
    'water': '#6390F0',
    'normal': '#A8A77A',
    'poison': '#A33EA1',
    'flying': '#A890F0',
    'bug': '#A8B820',
    // Ajoutez d'autres types ici
};

// Mapping des noms de stats
const STAT_NAMES = {
    'hp': 'PV BASE',
    'attack': 'ATTAQUE',
    'defense': 'DÉFENSE',
    'special-attack': 'ATT. SPÉ.',
    'special-defense': 'DÉF. SPÉ.',
    'speed': 'VITESSE'
};



const nextPlayer = (currentPlayer) => (currentPlayer === 1) ? 2 : 1;


const setCurrentPLayer = (playerNumber) => {
    gameState.curentPlayer = playerNumber;

    const cardElement = document.getElementById(`pokemon-card-${playerNumber}`);
    cardElement.classList.add('active-player');

    const nextCardElement = document.getElementById(`pokemon-card-${nextPlayer(playerNumber)}`);
    nextCardElement.classList.remove('active-player');  

};


/**
 * Simule le chargement des données de base du Pokémon (Endpoint /pokemon/{id}).
 * REMARQUE : Dans une application réelle, cette fonction ferait le fetch() à l'API.
 * @param {string} idOrName - L'ID ou le nom du Pokémon.
 * @returns {Promise<Object>} Les données brutes du Pokémon.
 */
const loadPokemon = async (idOrName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
        if (!response.ok) {
            throw new Error(`Erreur lors du chargement de ${idOrName}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur loadPokemon:", error);
        return null;
    }
};

/**
 * Simule le chargement des données de l'espèce du Pokémon (Endpoint /pokemon-species/{id}).
 * REMARQUE : Dans une application réelle, cette fonction ferait le fetch() à l'API.
 * @param {string} speciesUrl - L'URL de l'espèce du Pokémon.
 * @returns {Promise<Object>} Les données brutes de l'espèce.
 */
const loadPokemonSpecies = async (speciesUrl) => {
    try {
        const response = await fetch(speciesUrl);
        if (!response.ok) {
            throw new Error(`Erreur lors du chargement de l'espèce: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur loadPokemonSpecies:", error);
        return null;
    }
};


const getPokemon = async (idOrName) => {
    const dataPokemon = await loadPokemon(idOrName);
    if (!dataPokemon) return null;

    const dataSpecies = await loadPokemonSpecies(dataPokemon.species.url);
    if (!dataSpecies) return null;

    // Mappage des noms de statistiques de l'API vers les noms français de la carte
    const statNameMap = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
    const stats = {};
    dataPokemon.stats.forEach(statEntry => {
        const apiName = statEntry.stat.name;
        if (statNameMap.includes(apiName)) {
            stats[apiName] = statEntry.base_stat;
        }
    });

    return {
        // --- DONNÉES SIMPLES ---
        id: dataPokemon.id,
        nom: dataPokemon.name,
        image_url: dataPokemon.sprites.front_default,

        // --- TYPE ET COULEUR ---
        type_principal: dataPokemon.types[0].type.name, // Le premier type est le principal
        couleur_espece: dataSpecies.color.name,

        // --- STATISTIQUES (formatées) ---
        stats: stats,

        // --- CAPACITÉS ---
        capacites: dataPokemon.abilities.map(abilityEntry => abilityEntry.ability.name)
    };;
};


/**
 * Fonction utilitaire pour créer le HTML des barres de statistiques.
 * @param {Object} stats - L'objet stats du Pokémon.
 * @param {string} color - La couleur principale (hex) pour les barres.
 * @returns {string} Le HTML des barres.
 */
const createStatsHTML = (stats, color) => {
    let statsHTML = '';

    for (const key in stats) {
        const baseStat = stats[key];
        const percentage = Math.round((baseStat / MAX_BASE_STAT) * 100);
        const statLabel = STAT_NAMES[key] || key.toUpperCase();

        statsHTML += `
                    <div class="d-flex align-items-center gap-2">
                        <div class="col-4 text-muted text-micro"><small>${statLabel}</small></div>
                        <div class="col-8 d-flex align-items-center gap-2">
                            <span class="fw-bold text-dark text-end" style="width: 30px;"><small>${baseStat}</small></span>
                            <div class="progress flex-grow-1">
                                <div class="progress-bar" role="progressbar" 
                                    style="width: ${percentage}%; background-color: ${color};" 
                                    aria-valuenow="${baseStat}" aria-valuemin="0" aria-valuemax="${MAX_BASE_STAT}">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    }
    return statsHTML;
};

/**
 * Fonction utilitaire pour créer le HTML des badges de capacités.
 * @param {string[]} abilities - Liste des noms de capacités.
 * @param {string} color - La couleur principale (hex) pour les badges.
 * @returns {string} Le HTML des badges.
 */
const createAbilitiesHTML = (abilities, color) => {
    return abilities.map(ability => `
                <span class="badge text-white text-capitalize rounded-pill fw-bold shadow-sm py-2 px-3" 
                      style="background-color: ${color};">
                    ${ability}
                </span>
            `).join('');
};

/**
 * Met à jour les éléments individuels du DOM de la carte avec les nouvelles données.
 * Utilise querySelector sur l'élément parent pour cibler les classes (js-*) localement.
 * @param {string} cardId - L'ID du conteneur principal de la carte ('pokemon-card-1', 'pokemon-card-2', etc.).
 * @param {Object} data - L'objet structuré du Pokémon.
 */
const updateCard = (cardId, data) => {
    const cardElement = document.getElementById(cardId);
    if (!cardElement || !data) {
        console.error(`Impossible de mettre à jour la carte ${cardId}. Données ou élément manquant.`);
        return;
    }

    // Fonction d'aide pour trouver un élément dans le contexte de la carte
    const qS = (selector) => cardElement.querySelector(selector);
    
    // --- 1. Détermination de la couleur et des styles ---
    const cardColor = TYPE_COLORS[data.type_principal] || '#6c757d'; 
    
    // Assure que l'état initial des PV est au maximum (valeur maximale de la stat hp)
    const maxPV = data.stats.hp;
    const currentPV = maxPV;
    const currentMana = MAX_MANA; 

    // --- 2. Mise à jour de l'en-tête (Couleur, ID, Nom, Image, Type) ---

    // Couleurs
    cardElement.style.borderColor = cardColor;
    qS('.js-card-header').style.backgroundColor = cardColor;
    qS('.js-attack-special-button').style.backgroundColor = cardColor;

    // Texte et Image
    qS('.js-pokemon-id').textContent = `#${String(data.id).padStart(3, '0')}`;
    qS('.js-pokemon-name').textContent = data.nom;
    qS('.js-pokemon-image').src = data.image_url;
    qS('.js-pokemon-image').alt = `Image de ${data.nom}`;
    qS('.js-pokemon-type').textContent = data.type_principal;

    // --- 3. Mise à jour des valeurs de combat (PV & Mana) ---

    // PV
    qS('.js-pv-text').textContent = `${currentPV} / ${maxPV}`;
    const pvProgress = qS('.js-pv-progress');
    pvProgress.style.width = '100%';
    pvProgress.setAttribute('aria-valuenow', currentPV);
    pvProgress.setAttribute('aria-valuemax', maxPV);

    // Mana
    qS('.js-mana-text').textContent = `${currentMana} / ${MAX_MANA}`;
    const manaProgress = qS('.js-mana-progress');
    manaProgress.style.width = '100%';
    manaProgress.setAttribute('aria-valuenow', currentMana);
    manaProgress.setAttribute('aria-valuemax', MAX_MANA);

    // --- 4. Mise à jour des Statistiques (Insertion HTML) ---
    const statsHTML = createStatsHTML(data.stats, cardColor);
    qS('.js-stats-container').innerHTML = statsHTML;
    
    // --- 5. Mise à jour des Capacités (Insertion HTML) ---
    const abilitiesHTML = createAbilitiesHTML(data.capacites, cardColor);
    qS('.js-abilities-container').innerHTML = abilitiesHTML;
};

// Chargement initial au démarrage
document.addEventListener('DOMContentLoaded', () => {

    (async () => {
        // Charger Dracaufeu pour la carte 1
        const pokemon1 = await getPokemon("charizard");
        updateCard('pokemon-card-1', pokemon1);
        
        // Charger Pikachu pour la carte 2
        const pokemon2 = await getPokemon("pikachu");
        updateCard('pokemon-card-2', pokemon2);

        setCurrentPLayer(Math.floor(Math.random() * 2) + 1);

        const $nextPlayerButton = document.getElementById('btn-new-player');
        $nextPlayerButton.addEventListener('click', () => {
            setCurrentPLayer(nextPlayer(gameState.curentPlayer));
        });

    })();

});

