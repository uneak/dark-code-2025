const global = "Je suis global";

function maFonction() {
  const local = "Je suis local";
  console.log(global); // OK
  console.log(local);  // OK
}

maFonction();

try {
  console.log(local); // ERREUR - local n'existe pas ici
}   catch (e) {
  console.log("local n'existe pas ici");
}

console.log(global); // OK
