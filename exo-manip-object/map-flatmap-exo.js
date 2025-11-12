const etudiants = [
    {
        nom: 'Alice',
        classe: 'A',
        notes: [15, 18, 12, 16]
    },
    {
        nom: 'Bob',
        classe: 'B',
        notes: [8, 10, 9, 11]
    },
    {
        nom: 'Charlie',
        classe: 'A',
        notes: [17, 19, 18, 20]
    }
];

// TODO 1: Ajouter la moyenne à chaque étudiant
// Résultat attendu: { nom: 'Alice', classe: 'A', notes: [...], moyenne: 15.25 }

const moyenne = etudiants.map(etudiant => ({ ...etudiant, moyenne: etudiant.notes.reduce((acc, note) => acc + note, 0) / etudiant.notes.length }));

console.log({moyenne});

// TODO 2: Ajouter aussi la mention (moyenne >= 16 = 'Bien', >= 10 = 'Passable', sinon 'Insuffisant')

const mention = moyenne.map(etudiant => {
    let mention = '';
    if (etudiant.moyenne >= 16) {
        mention = 'Bien';
    } else if (etudiant.moyenne >= 10) {
        mention = 'Passable';
    } else {
        mention = 'Insuffisant';
    }

    return { ...etudiant, mention };
});

console.log({mention});

// TODO 3: Récupérer toutes les notes dans un seul tableau

const notes = mention.flatMap(etudiant => etudiant.notes);
console.log({notes});

// TODO 4: Calculer la moyenne générale de tous les étudiants

const moyenneGenerale = notes.reduce((acc, note) => {
    return acc + note;
}, 0) / notes.length;

console.log({moyenneGenerale});






// const notes = etudiants
//     .map(etudiant => ({ ...etudiant, moyenne: etudiant.notes.reduce((acc, note) => acc + note, 0) / etudiant.notes.length }))
//     .map(etudiant => ({ ...etudiant, mention: (etudiant.moyenne >= 16) ? 'Bien' : (etudiant.moyenne >= 10) ? 'Passable' : 'Insuffisant' }))
//     .flatMap(etudiant => etudiant.notes);

// const moyenneGenerale = notes.reduce((acc, note) => (acc + note), 0) / notes.length;