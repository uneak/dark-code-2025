

document.addEventListener('DOMContentLoaded', () => {

    const $button = document.querySelector('#add-p');
    const $container = document.querySelector('#container');
    const $input = document.querySelector('#input-text');


    $button.addEventListener('click', () => {
        console.log("click");
        console.log($input.value);

        const $li = document.createElement('li');
        $li.textContent = $input.value;
        $container.append($li);

        $input.value = "";
    });

 });
