
$form = document.querySelector('#form');

// document.querySelector('#search').addEventListener('input', e => console.log(e.target.value));

// const $select = document.querySelector('#select');
// $select.addEventListener('change', e => console.log(e.target.value));


$form.addEventListener('submit', (event) => {
    event.preventDefault();

    const $nom = document.querySelector('#nom');
    const $email = document.querySelector('#email');
    const $password = document.querySelector('#password');

    const nomErrors = validateStringLength($nom.value, 3, 20);
    const emailErrors = validateEmail($email.value);
    const passwordErrors = validateStringLength($password.value, 6, 20);

    console.log(nomErrors);
    console.log(emailErrors);
    console.log(passwordErrors); 

    const $nomErrorList = $nom.parentElement.querySelector('.list-errors');
    $nomErrorList.replaceChildren();

    const $emailErrorList = $email.parentElement.querySelector('.list-errors');
    $emailErrorList.replaceChildren();

    const $passwordErrorList = $password.parentElement.querySelector('.list-errors');
    $passwordErrorList.replaceChildren();



    if (nomErrors !== true) {
        for (let i = 0; i < nomErrors.length; i++) {
            const $errorLi = document.createElement('li');
            $errorLi.textContent = nomErrors[i];
            $nomErrorList.append($errorLi);
        }
    }

    if (emailErrors !== true) {
        for (let i = 0; i < emailErrors.length; i++) {
            const $errorLi = document.createElement('li');
            $errorLi.textContent = emailErrors[i];
            $emailErrorList.append($errorLi);
        }
    }   

    if (passwordErrors !== true) {
        for (let i = 0; i < passwordErrors.length; i++) {
            const $errorLi = document.createElement('li');
            $errorLi.textContent = passwordErrors[i];
            $passwordErrorList.append($errorLi);
        }
    }




    if (nomErrors === true && 
        emailErrors === true && 
        passwordErrors === true
    ) {
        console.log("SUBMIT"); 
        event.target.submit();
        return;
    }
});



function validateEmail(email) {
    const errorList = [];

    // Vérifier que l'email n'est pas vide
    if (email.trim().length === 0) {
        errorList.push("L'adresse email ne peut pas être vide");
    }

    // Vérifier la présence du @
    if (!email.includes("@")) {
        errorList.push("L'adresse email doit contenir un @");
    }

    // Vérifier qu'il y a un seul @
    if ((email.match(/@/g) || []).length !== 1) {
        errorList.push("L'adresse email ne doit contenir qu'un seul @");
    }

    // Vérifier le format général avec une regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorList.push("L'adresse email doit être au format valide (ex: nom@domaine.com)");
    }

    // Vérifier que la partie avant @ n'est pas vide
    const [localPart, domain] = email.split("@");
    if (localPart && localPart.length === 0) {
        errorList.push("La partie avant @ ne peut pas être vide");
    }

    // Vérifier que la partie après @ n'est pas vide
    if (domain && domain.length === 0) {
        errorList.push("Le domaine ne peut pas être vide");
    }

    // Vérifier que le domaine contient au moins un point
    if (domain && !domain.includes(".")) {
        errorList.push("Le domaine doit contenir au moins un point");
    }

    if (errorList.length > 0) {
        return errorList;
    }
    return true;
}



function validateStringLength(stringValue, min, max) {
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