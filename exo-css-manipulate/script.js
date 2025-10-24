document.addEventListener('DOMContentLoaded', () => {
    
    // let toggle = false;

    const element = document.querySelector('#monDiv');
    console.log({element});
    



    element.onclick = () => {
        element.classList.toggle('actif');
        // if (toggle === false) {
        //     element.classList.add('actif');
        //     toggle = true;
        // } else {
        //     element.classList.remove('actif');
        //     toggle = false;
        // }
        console.log(element.className);

    }

});