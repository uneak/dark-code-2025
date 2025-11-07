

//
const array = [1, 6, 8, 3, 5, 7, 7, 2, 4, 9, 10, 7];

//
// exo : trier l'array sans utiliser de fonction sort


// retour est un trableau trié, ex : 
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isComplete = false;

while (isComplete === false) {
    isComplete = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            isComplete = false;
            const temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
}

console.log(array);