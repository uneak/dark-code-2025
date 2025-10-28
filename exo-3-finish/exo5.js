

document.addEventListener('DOMContentLoaded', () => {

    const $button = document.querySelector('#toggle');
    const $mainTitle = document.getElementById('main-title');

    $button.addEventListener('click', () => {
        console.log("click");
        $mainTitle.classList.toggle('cache');
    });

 });
