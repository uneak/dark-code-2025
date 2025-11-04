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


const createLine = (name, price, options = {}) => {
    const {description, highlight, vegetarian} = options;
    // test de validation input
    if (!name || !price) {
        throw new Error("Les arguments 'name' et 'price' sont obligatoires");
    }

    const $div = document.createElement("div");
    $div.className = "menu-item";

    // Ajout des classes spéciales selon les options
    if (highlight) {
        $div.classList.add("highlight");
    }
    if (vegetarian) {
        $div.classList.add("vegetarian");
    }

    // Ajout des icônes selon le type de plat
    const icon = highlight ? ' <i class="bi bi-star-fill"></i>' :
        vegetarian ? ' <i class="bi bi-leaf"></i>' : '';

    $div.innerHTML = `
        <div class="item-header">
            <h3>${name}${icon}</h3>
            <span class="price">${price}€</span>
        </div>
        ${description ? `<p class="description">${description}</p>` : ''}
    `;


    return $div;
};


// ============================================
// FONCTIONS DE MISE À JOUR DU DOM
// ============================================

const updateDom = (data, $container) => {
    data.forEach(item => {
        const $div = createLine(item.name, item.price, {
            description: item.description,
            highlight: item.highlight,
            vegetarian: item.vegetarian
        });
        $container.appendChild($div);
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
    updateDom(dataP, $listePlats);
    updateDom(dataE, $listeEntrees);

    // Chargement et affichage des desserts
    const dataD = await fetchDataDesserts();
    updateDom(dataD, $listeDesserts);

    // Chargement et affichage des boissons
    const dataB = await fetchDataBoissons();
    updateDom(dataB, $listeBoissons);
};


// ============================================
// INITIALISATION
// ============================================

// Lancement du chargement de la carte au chargement de la page
updateCarte();