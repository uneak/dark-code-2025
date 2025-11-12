// Exercice 5 : Statistiques
// Calculez les statistiques pour :
// javascriptconst notes = [15, 12, 18, 10, 16, 14, 17, 11];

// Moyenne
// Note minimale
// Note maximale
// Nombre de notes >= 15



const notes = [15, 12, 18, 10, 16, 14, 17, 11];

const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;
console.log(moyenne);

const min = Math.min(...notes);
console.log(min);

const max = Math.max(...notes);
console.log(max);

const nbNoteGreaterThan15 = notes.filter(note => note >= 15).length;
console.log(nbNoteGreaterThan15);

