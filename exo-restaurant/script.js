const preparer = async () => {
    console.log("1. preparer");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Ingrédients prêts");
            resolve();
        }, 1000);
    });
};

const cuire = async () => {
    console.log("2. cuire");
    return new Promise(resolve => setTimeout(() => {
        console.log("Cuisson terminée");
        resolve();
    }, 2000));
};

const dresser = async () => {
    console.log("3. dresser");
    return new Promise(resolve => setTimeout(() => {
        console.log("Plat dressé");
        resolve();
    }, 1000));
};


preparer().then(cuire).then(dresser);

// (async () => {
//     await preparer();
//     await cuire();
//     await dresser();
// })();