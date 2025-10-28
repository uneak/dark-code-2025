/**
 * Exercice innerHTML
 * Attendre que le DOM soit chargé, puis manipuler les éléments HTML
 */
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner l'élément avec l'ID 'app'
    const $app = document.querySelector('#app');

    // Ajouter du HTML dans l'élément (créer un h1 avec le texte "Hello World")
    $app.innerHTML = "<h1>Hello World</h1>";

    // Sélectionner le h1 qu'on vient de créer
    const $h1 = $app.querySelector('h1');

    // Changer la couleur du h1 en rouge
    $h1.style.color = "red";
});