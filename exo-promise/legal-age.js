

const verifierAgeLegal = age => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age < 18) {
                reject("Vous devez être âgé de 18 ans ou plus");
            } else {
                resolve("Vous êtes âgé de 18 ans ou plus");
            }
        }, 1500);
    });
}


verifierAgeLegal(28)
    .then(message => console.log(message))
    .catch(errorMessage => console.log(errorMessage))
    .finally(() => console.log("Voila voila"));

verifierAgeLegal(18)
    .then(message => console.log(message))
    .catch(errorMessage => console.log(errorMessage));

verifierAgeLegal(28)
    .then(message => console.log(message))
    .catch(errorMessage => console.log(errorMessage));


