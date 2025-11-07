
const api1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "ok" });
        }, 1000);
    });
};

const api2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Error("Erreur réseau"));
        }, 1000);
    });
};

const api3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "ok" });
        }, 1000);
    });
};

const api4 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Error("Timeout"));
        }, 1000);
    });
};

const api5 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "ok" });
        }, 1000);
    });
};


Promise.all([api1(), api2(), api3(), api4(), api5()]).then(results => {
    console.log(results);
});