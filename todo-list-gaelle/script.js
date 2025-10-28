document.addEventListener('DOMContentLoaded', () => {

    const $input = document.querySelector('input');
    const $button = document.querySelector('button');
    const $list = document.querySelector("#todo-list");

    $button.addEventListener('click', () => {
        const task = $input.value;

        const $li = document.createElement('li');
        $li.innerHTML = "<input type='checkbox'>" + task + "<button>X</button>";
        $list.appendChild($li);

        const $checkbox = $li.querySelector('input');
        const $button = $li.querySelector('button');

        $checkbox.addEventListener('change', () => {
            $li.classList.toggle('completed');
        });

        $button.addEventListener('click', () => {
            $li.remove();
        });

        $input.value = "";
    });

});