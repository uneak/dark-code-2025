

document.addEventListener('DOMContentLoaded', () => {

    const $body = document.querySelector('body');
    const $mainTitle = document.getElementById('main-title');

    const $img = $body.querySelector('img');
    const $element = $body.querySelector('p');

    $mainTitle.textContent = "Re-Bonjour";
    $img.src = "images/dead.png";

    $element.classList.add('highlight');

 });
