function calculerCarre(nombre) { 
    //: retourne le carré du nombre
    return nombre * nombre;
}
function estPair(nombre) { 
    //: retourne true si pair, false sinon
    return nombre % 2 == 0;
    }
function obtenirInitiales(prenom, nom) { 
    //: retourne les initiales (ex: "M.D.")
    const iPrenom = prenom.substring(0, 1).toUpperCase();
    const iNom = nom.substring(0, 1).toUpperCase();
    return `${iPrenom}.${iNom}.`;
    }
function calculerMoyenne(note1, note2, note3) { 
    //: retourne la moyenne
    return (note1 + note2 + note3) / 3;
    }
function afficherTableMultiplication(nombre) { 
    //: affiche la table de 1 à 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${nombre} = ${i * nombre}`);
        }
    }


console.log(calculerCarre(5));
console.log(estPair(6));
console.log(obtenirInitiales("Marc", "galoyer"));
console.log(calculerMoyenne(5, 10, 15));
afficherTableMultiplication(5);
