const preparer = async (nom, temps) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`🍕 ${nom} prête !`);
            resolve();
        }, temps);
    });
};

const margherita = preparer("Margherita", 3000);
const fourFromages = preparer("4 Fromages", 2000);
const calzone = preparer("Calzone", 4000);

Promise.all([margherita, fourFromages, calzone])
    .then(() => {
        console.log("🎉 Toutes les pizzas sont prêtes !");
    })


