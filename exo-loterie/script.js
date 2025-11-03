


const jouerLoterie =  () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                console.log("random", random);

                if (random < 0.5) {
                    resolve();
                } else {
                    reject();
                }
            }, 1000);
        }
    );
};



async function main() {
    try {
        await jouerLoterie();
        console.log("WIN");
    } catch (e) {
        console.log("LOSE");
    }
}

let cmpt = 0;
(function main2() {
    jouerLoterie()
        .then(() => {
            console.log("WIN");
        })
        .catch(() => {
            console.log("LOSE");
        })
        .finally(() => {
            cmpt++;
            if (cmpt < 10) {
                main2();
            }
        });
})();



(async () => {
for (let i = 0; i < 10; i++) {
    await main();
}
})();
