
const $listeBoissons = document.querySelector("#Boissons ul.simple-list");

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

const addBoisson = (name, price) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="item-name">${name}</span>
        <span class="item-price">${price}€</span>
    `;
    $listeBoissons.appendChild(li);
};

fetchBoissons().then(boissons => {
    boissons.forEach(boisson => {
        addBoisson(boisson.name, boisson.price);
    });
});