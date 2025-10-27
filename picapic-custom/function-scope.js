{
    let energie = 15;

    function setEnergie(valeur) {
        energie = valeur + 20;
        console.log(energie);
    }

    function updateEnergie(diff) {
        const nEnergy = energie + diff;
        setEnergie(nEnergy);
    }

    setEnergie(25);
    updateEnergie(-5);
    console.log(energie);
}