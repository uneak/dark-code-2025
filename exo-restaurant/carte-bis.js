
const $listeBoissons = document.querySelector("#Boissons ul.simple-list");
const $listeDesserts = document.querySelector("#Desserts ul.simple-list");
const $listeEntrees = document.querySelector("#Plats .plats-subsection.entrees .menu-items");
const $listePlats = document.querySelector("#Plats .plats-subsection.plats .menu-items");

// Fonctions utilitaires pour le spinner
const showSpinner = (container, message = "Chargement...") => {
    // Déterminer le type d'élément à créer (li pour ul, div pour div)
    const isUl = container.tagName === "UL";
    const spinner = document.createElement(isUl ? "li" : "div");
    spinner.className = "loading-spinner";
    spinner.innerHTML = `
        <div class="spinner-container">
            <div class="spinner"></div>
            <span>${message}</span>
        </div>
    `;
    container.appendChild(spinner);
};

const hideSpinner = (container) => {
    const spinner = container.querySelector(".loading-spinner");
    if (spinner) {
        spinner.remove();
    }
};

const fetchBoissons = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    name: "Boisson de Chocolat",
                    price: 10
                },
                {
                    name: "Boisson de Fruits",
                    price: 12
                },
                {
                    name: "Boisson de Noyau",
                    price: 14
                },
                {
                    name: "Boisson de Sucre",
                    price: 16
                }
            ]);
        }, 3000);
    });
};

const fetchDesserts = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    name: "Tarte Tatin",
                    price: 12
                },
                {
                    name: "Fondant au Chocolat",
                    price: 13
                },
                {
                    name: "Crème Brûlée",
                    price: 11
                },
                {
                    name: "Assiette de Fromages",
                    price: 14
                }
            ]);
        }, 2000);
    });
};

const fetchEntrees = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    name: "Foie Gras de Canard",
                    price: 18,
                    description: "Poêlé, chutney de figues et pain brioché maison"
                },
                {
                    name: "Carpaccio de Saint-Jacques",
                    price: 22,
                    description: "Huile de truffe, agrumes et caviar de citron"
                },
                {
                    name: "Velouté de Champignons",
                    price: 14,
                    description: "Crème de cèpes, noisettes torréfiées"
                },
                {
                    name: "Tartare de Saumon",
                    price: 16,
                    description: "Avocat, mangue et vinaigrette au yuzu"
                }
            ]);
        }, 1500);
    });
};

const fetchPlats = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    name: "Filet de Bœuf Rossini",
                    price: 38,
                    description: "Foie gras poêlé, sauce Périgueux, légumes de saison",
                    highlight: true
                },
                {
                    name: "Pavé de Cabillaud",
                    price: 28,
                    description: "Risotto aux asperges, beurre blanc citronnée"
                },
                {
                    name: "Magret de Canard",
                    price: 32,
                    description: "Gratin dauphinois, sauce aux fruits rouges"
                },
                {
                    name: "Risotto aux Morilles",
                    price: 24,
                    description: "Parmesan, huile de truffe et roquette",
                    vegetarian: true
                },
                {
                    name: "Carré d'Agneau",
                    price: 36,
                    description: "Croûte d'herbes, jus corsé, tian de légumes"
                }
            ]);
        }, 2500);
    });
};

const addBoisson = (name, price) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="item-name">${name}</span>
        <span class="item-price">${price}€</span>
    `;
    $listeBoissons.appendChild(li);
};

const addDessert = (name, price) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="item-name">${name}</span>
        <span class="item-price">${price}€</span>
    `;
    $listeDesserts.appendChild(li);
};

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

const addPlat = (name, price, description, options = {}) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    if (options.highlight) {
        div.classList.add("highlight");
    }
    if (options.vegetarian) {
        div.classList.add("vegetarian");
    }

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

// Fonctions de mise à jour du DOM (sans fetch)
const updateBoissons = (boissons) => {
    $listeBoissons.replaceChildren();
    for (const boisson of boissons) {
        addBoisson(boisson.name, boisson.price);
    }
};

const updateDesserts = (desserts) => {
    $listeDesserts.replaceChildren();
    for (const dessert of desserts) {
        addDessert(dessert.name, dessert.price);
    }
};

const updateEntrees = (entrees) => {
    $listeEntrees.replaceChildren();
    for (const entree of entrees) {
        addEntree(entree.name, entree.price, entree.description);
    }
};

const updatePlats = (plats) => {
    $listePlats.replaceChildren();
    for (const plat of plats) {
        addPlat(plat.name, plat.price, plat.description, {
            highlight: plat.highlight,
            vegetarian: plat.vegetarian
        });
    }
};


// Fonction générique pour charger des données avec spinner
const load = async (container, fetchFn, message) => {
    showSpinner(container, message);
    const data = await fetchFn();
    hideSpinner(container);
    return data;
};

// Fonctions de chargement (fetch + spinner uniquement)
const loadBoissons = async () => await load(
    $listeBoissons,
    fetchDataBoissons,
    "Chargement des boissons..."
);

const loadDesserts = async () => await load(
    $listeDesserts,
    fetchDesserts,
    "Chargement des desserts..."
);

const loadEntrees = async () => await load(
    $listeEntrees,
    fetchEntrees,
    "Chargement des entrées..."
);

const loadPlats = async () => await load(
    $listePlats,
    fetchPlats,
    "Chargement des plats..."
);

// Fonction pour charger et afficher toute la carte
const loadCarte = async () => {
    const [plats, entrees] = await Promise.all([loadEntrees(),loadPlats()]);
    updatePlats(plats);
    updateEntrees(entrees);

    const desserts = await loadDesserts();
    updateDesserts(desserts);

    const boissons = await loadBoissons();
    updateDomBoissons(boissons);
};

// Initialisation
loadCarte();
