console.log("Hello World");


const app = document.getElementById('app');


const nouveauDiv = document.createElement('div');
nouveauDiv.innerHTML = "<h1 id='title'>Hello World</h1><p>Bonjour</p>";


// for (let i = 0; i < 10; i++) {
    const nouveauP = document.createElement('p');
    nouveauP.textContent = "zuhffdksjhsfkjhsdbsdjkhfbkfjhdbkfj";
    nouveauP.style.color = "red";
    nouveauP.classList.add('test');
    nouveauP.addEventListener('click', () => {
        alert("click");
    });
    app.append(nouveauP, nouveauDiv);
// }


const title = document.getElementById('title');
title.remove();