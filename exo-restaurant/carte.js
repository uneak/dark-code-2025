// ============================================
// SÉLECTION DES ÉLÉMENTS DOM
// ============================================

// Conteneurs pour les différentes sections du menu
const $listeBoissons = document.querySelector("#Boissons ul.simple-list");
const $listeDesserts = document.querySelector("#Desserts ul.simple-list");
const $listeEntrees = document.querySelector("#Plats .plats-subsection.entrees .menu-items");
const $listePlats = document.querySelector("#Plats .plats-subsection.plats .menu-items");


// ============================================
// FONCTIONS D'AJOUT D'ÉLÉMENTS AU DOM
// ============================================

/**
 * Ajoute un dessert à la liste des desserts
 * @param {string} name - Nom du dessert
 * @param {number} price - Prix du dessert
 */
const addDessert = (name, price) => {
    const $li = document.createElement("li");
    $li.innerHTML = `
        <span class="item-name">${name}</span>
        <span class="item-price">${price}€</span>
    `;
    $listeDesserts.appendChild($li);
};

/**
 * Ajoute une boisson à la liste des boissons
 * @param {string} name - Nom de la boisson
 * @param {number} price - Prix de la boisson
 */
const addBoisson = (name, price) => {
    const $li = document.createElement("li");
    $li.innerHTML = `
        <span class="item-name">${name}</span>
        <span class="item-price">${price}€</span>
    `;
    $listeBoissons.appendChild($li);
};

/**
 * Ajoute une entrée à la liste des entrées
 * @param {string} name - Nom de l'entrée
 * @param {number} price - Prix de l'entrée
 * @param {string} description - Description de l'entrée
 */
const addEntree = (name, price, description) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
        <div class="item-header">
            <h3>${name}</h3>
            <span class="price">${price}€</span>
        </div>
        <p class="description">${description}</p>
    `;
    $listeEntrees.appendChild(div);
};

/**
 * Ajoute un plat de résistance à la liste des plats
 * @param {string} name - Nom du plat
 * @param {number} price - Prix du plat
 * @param {string} description - Description du plat
 * @param {Object} options - Options du plat (highlight, vegetarian)
 */
const addPlat = (name, price, description, options = {}) => {
    const div = document.createElement("div");
    div.className = "menu-item";

    // Ajout des classes spéciales selon les options
    if (options.highlight) {
        div.classList.add("highlight");
    }
    if (options.vegetarian) {
        div.classList.add("vegetarian");
    }

    // Ajout des icônes selon le type de plat
    const icon = options.highlight ? ' <i class="bi bi-star-fill"></i>' :
        options.vegetarian ? ' <i class="bi bi-leaf"></i>' : '';

    div.innerHTML = `
        <div class="item-header">
            <h3>${name}${icon}</h3>
            <span class="price">${price}€</span>
        </div>
        <p class="description">${description}</p>
    `;
    $listePlats.appendChild(div);
};


// ============================================
// FONCTIONS DE MISE À JOUR DU DOM
// ============================================

/**
 * Met à jour la liste des boissons dans le DOM
 * @param {Array} data - Tableau d'objets boisson {name, price}
 */
const updateDomBoissons = (data) => {
    data.forEach(item => {
        addBoisson(item.name, item.price);
    });
}

/**
 * Met à jour la liste des desserts dans le DOM
 * @param {Array} data - Tableau d'objets dessert {name, price}
 */
const updateDomDesserts = (data) => {
    data.forEach(item => {
        addDessert(item.name, item.price);
    });
}

/**
 * Met à jour la liste des plats de résistance dans le DOM
 * @param {Array} data - Tableau d'objets plat {name, price, description, highlight?, vegetarian?}
 */
const updateDomPlats = (data) => {
    data.forEach(item => {
        addPlat(item.name, item.price, item.description, {
            highlight: item.highlight,
            vegetarian: item.vegetarian
        });
    });
};

/**
 * Met à jour la liste des entrées dans le DOM
 * @param {Array} data - Tableau d'objets entrée {name, price, description}
 */
const updateDomEntrees = (data) => {
    data.forEach(item => {
        addEntree(item.name, item.price, item.description);
    });
};


// ============================================
// FONCTION PRINCIPALE DE CHARGEMENT
// ============================================

/**
 * Charge et affiche toutes les données de la carte
 * Chargement en parallèle des entrées et plats pour optimiser les performances
 * Puis chargement séquentiel des desserts et boissons
 */
const updateCarte = async () => {
    // Chargement parallèle des entrées et plats de résistance
    const [dataE, dataP] = await Promise.all([fetchEntrees(), fetchPlats()]);
    updateDomPlats(dataP);
    updateDomEntrees(dataE);

    // Chargement et affichage des desserts
    const dataD = await fetchDataDesserts();
    updateDomDesserts(dataD);

    // Chargement et affichage des boissons
    const dataB = await fetchDataBoissons();
    updateDomBoissons(dataB);
};


// ============================================
// INITIALISATION
// ============================================

// Lancement du chargement de la carte au chargement de la page
updateCarte();