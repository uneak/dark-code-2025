
$form = document.querySelector('#form');

// document.querySelector('#search').addEventListener('input', e => console.log(e.target.value));

// const $select = document.querySelector('#select');
// $select.addEventListener('change', e => console.log(e.target.value));


$form.addEventListener('submit', (event) => {
    event.preventDefault();

    const $nom = document.querySelector('#nom');
    const $prenom = document.querySelector('#prenom');
    const $age = document.querySelector('#age');

    const nomErrors = validateNom($nom.value);
    const prenomErrors = validateLength($prenom.value, 3, 20);
    const ageErrors = validateMinimumAge($age.value);


    console.log(nomErrors);
    console.log(prenomErrors);
    console.log(ageErrors);


    const $nomErrorList = $nom.parentElement.querySelector('.list-errors');
    $nomErrorList.replaceChildren();

    const $prenomErrorList = $prenom.parentElement.querySelector('.list-errors');
    $prenomErrorList.replaceChildren();

    const $ageErrorList = $age.parentElement.querySelector('.list-errors');
    $ageErrorList.replaceChildren();



    if (nomErrors !== true) {
        for (let i = 0; i < nomErrors.length; i++) {
            const $errorLi = document.createElement('li');
            $errorLi.textContent = nomErrors[i];
            $nomErrorList.append($errorLi);
        }
    }

    if (prenomErrors !== true) {
        for (let i = 0; i < prenomErrors.length; i++) {
            const $errorLi = document.createElement('li');
            $errorLi.textContent = prenomErrors[i];
            $prenomErrorList.append($errorLi);
        }
    }   

    if (ageErrors !== true) {
        for (let i = 0; i < ageErrors.length; i++) {
            const $errorLi = document.createElement('li');
            $errorLi.textContent = ageErrors[i];
            $ageErrorList.append($errorLi);
        }
    }




    if (nomErrors === true && 
        prenomErrors === true && 
        ageErrors === true
    ) {
        console.log("SUBMIT"); 
        event.target.submit();
        return;
    }
});


function validateMinimumAge(age, minimumAge = 18) {
    if (age < minimumAge) {
        return ['Le champ "age" doit être supérieur ou égal à ' + minimumAge];
    }
    return true;
}


function validateNom(nom) {
    const errors = [];

    if (!nom.includes("a")) {
        errors.push("Le nom doit contenir la lettre 'a'");
    }

    const lengthErrors = validateLength(nom, 3, 20);
    if (lengthErrors !== true) {
        for (let i = 0; i < lengthErrors.length; i++) {
            errors.push(lengthErrors[i]);
        }
    }

    if (errors.length > 0) {
        return errors;
    }

    return true;
}



function validateLength(stringValue, min, max) {
    const errors = [];
    if (stringValue.length < min) {
        errors.push(`La valeur doit contenir au moins ${min} caractères`);
    }
    if (stringValue.length > max) {
        errors.push(`La valeur ne doit pas dépasser ${max} caractères`);
    }
    if (errors.length > 0) {
        return errors;
    }
    return true;
}