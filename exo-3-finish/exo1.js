

document.addEventListener('DOMContentLoaded', () => {

    const main = document.querySelector('body');

    console.log(main.firstElementChild);
    
    for (let i = 0; i < main.children.length; i++) {
        console.log(main.children[i]);
    }
    
 });
