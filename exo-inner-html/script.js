document.addEventListener('DOMContentLoaded', () => {

    const $app = document.querySelector('#app');

    $app.innerHTML = "<h1>Hello World</h1>";
    const $h1 = $app.querySelector('h1');
    $h1.style.color = "red";
});