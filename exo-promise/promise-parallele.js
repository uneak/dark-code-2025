// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("fuck u"), 3000);
// });
// const promise3 = Promise.resolve("Hello");

// console.log("start loading");
// Promise.all([promise1, promise2, promise3])
//   .then((resultats) => {
//     console.log(resultats); // [3, 42, "Hello"]
//   })
//   .catch((erreur) => {
//     console.error("Une promise a échoué:", erreur);
//   });



// En cas d'égalité, l'ordre de déclaration compte

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Lent"), 5000);
});


const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Looser"), 300);
});


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Rapide"), 400);
});


Promise.race([promise2, promise1, promise3])
  .then((resultat) => {
    console.log(resultat); // "Rapide"
  })
  .catch((erreur) => {
    console.error("Une promise a échoué:", erreur);
  });


// Promise.any([promise2, promise1, promise3])
//   .then((resultat) => {
//     console.log(resultat); // "Succès"
//   })
//   .catch(() => {
//     console.log("Toutes ont échoué");
//   });