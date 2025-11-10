// Tableau d'utilisateurs initial
const utilisateurs = [
    { id: 1, nom: 'Alice', age: 25, ville: 'Paris' },
    { id: 2, nom: 'Bob', age: 30, ville: 'Lyon' },
    { id: 3, nom: 'Charlie', age: 35, ville: 'Paris' },
    { id: 4, nom: 'Diana', age: 28, ville: 'Lyon' }
];


// Trier par âge croissant
// ⚠️ sort() modifie le tableau original, donc on crée une copie avec [...utilisateurs]
// La fonction de comparaison renvoie un nombre : négatif si a < b, positif si a > b
const parAge = [...utilisateurs].sort((a, b) => {
    return a.age - b.age;
});

// Trier par nom alphabétique
// localeCompare() compare des strings en respectant l'ordre alphabétique (accents, etc.)
const parNom = [...utilisateurs].sort((a, b) => {
    return a.nom.localeCompare(b.nom);
});

console.log({parAge, parNom});


// Grouper les utilisateurs par ville avec reduce
// reduce transforme le tableau en objet : { Paris: [...], Lyon: [...] }
// acc : accumulateur (objet qui se construit), user : utilisateur courant
const parVille = utilisateurs.reduce((acc, user) => {
    // Si la ville n'existe pas encore dans l'objet, créer un tableau vide
    if (!acc[user.ville]) {
        acc[user.ville] = [];
    }
    // Ajouter l'utilisateur au groupe de sa ville
    acc[user.ville].push(user);
    // Renvoyer l'accumulateur pour l'itération suivante
    return acc;
}, {}); // {} = valeur initiale de l'accumulateur (objet vide)

// console.log({parVille});

// Indexer les utilisateurs par id avec reduce
// Transforme le tableau en objet : { 1: {...}, 2: {...}, 3: {...}, 4: {...} }
// Utile pour accès rapide par id : parId[2] pour récupérer Bob
const parId = utilisateurs.reduce((groupId, utilisateur) => {
    // Utiliser l'id comme clé et l'utilisateur comme valeur
    groupId[utilisateur.id] = utilisateur;

    return groupId;
}, {}); // {} = objet vide initial

// console.log({ parId });