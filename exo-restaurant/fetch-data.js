
const fetchDataBoissons = async () => {
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
        }, 1000);
    });
};




const fetchDataDesserts = async () => {
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
        }, 1000);
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
