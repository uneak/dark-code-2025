const nombres = [1, 2, 3, 4, 5];

// Déstructuration basique
const [a, b, c] = nombres;
console.log(a, b, c); // 1 2 3

// // Ignorer des éléments
const [premier, , troisieme] = nombres;
console.log(premier, troisieme); // 1 3

// // Rest operator (...)
const [x, y, ...reste] = nombres;
console.log(x);      // 1
console.log(y);      // 2
console.log(reste);  // [3, 4, 5]


// // Valeurs par défaut
const [m, n, o, p = 10] = [1, 2, 3];
console.log(p); // 10

// // Échanger des variables
let var1 = 'A';
let var2 = 'B';
[var2, var1] = [var1, var2];
console.log(var1, var2); // 'B' 'A'