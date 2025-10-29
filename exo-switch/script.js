

const marque = "bmw";


if (marque === "audi" || marque === "ferrari") {
    console.log("voiture sport");
} else if (marque === "bmw") {
    console.log("BMW");
} else if (marque === "mercedes") {
    console.log("Mercedes");
} else {
    console.log("Autre");
}


switch (marque) {
    case "ferrari":
    case "audi":
        console.log("voiture sport");
        break;
    case "bmw":
        console.log("BMW");
        break;
    case "mercedes":
        console.log("Mercedes");
        break;
    default:
        console.log("autre");
        break;
}


