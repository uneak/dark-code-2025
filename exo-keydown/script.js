
const $personnage = document.getElementById('personnage');

const coordonnees = {
    x: 0,
    y: 0
};

$personnage.style.position = "absolute";

function moveCoordonnees(stepX, stepY) {
    coordonnees.x += stepX;
    coordonnees.y -= stepY;
    $personnage.style.left = coordonnees.x + "px";
    $personnage.style.top = coordonnees.y + "px";
}


document.addEventListener('keydown', (event) => {
    console.log(event.key);

    switch (event.key) {
        case "ArrowRight":
            moveCoordonnees(10, 0);
            break;
        case "ArrowLeft":
            moveCoordonnees(-10, 0);
            break;
        case "ArrowUp":
            moveCoordonnees(0, 10);
            break;
        case "ArrowDown":
            moveCoordonnees(0, -10);
            break;
        case " ":
            $personnage.src = "images/attack.png";
            break;
    }


    // equivalent à switch
    // if (event.key === "ArrowRight") {
    //     moveCoordonnees(10, 0);
    // } else if (event.key === "ArrowLeft") {
    //     moveCoordonnees(-10, 0);
    // } else if (event.key === "ArrowUp") {
    //     moveCoordonnees(0, 10);
    // } else if (event.key === "ArrowDown") {
    //     moveCoordonnees(0, -10);
    // } else if (event.key === " ") {
    //     $personnage.src = "images/attack.png";
    // }
});
