document.addEventListener('DOMContentLoaded', () => {
    
    const $racine = document.querySelector('#racine');
    const $premierLevel = document.querySelector('#premierLevel');
    const $deuxiemeLevel = document.querySelector('#deuxiemeLevel');
    const $troisiemeLevel = document.querySelector('#troisiemeLevel');
    const $bouton = document.querySelector('#bouton');
    const $bouton2 = document.querySelector('#bouton2');


    // je veux tester/observer les propagation d'evenement dans toute les phases (bubbling, capture)
    // je veux aussi pouvoir désactiver les propagation



    $deuxiemeLevel.addEventListener('click', event => {
        console.log('DeuxiemeLevel cliqué capture');
        // event.stopPropagation();
    }, true);

    $premierLevel.addEventListener('click', event => {
        console.log('PremierLevel cliqué capture');
        // event.stopPropagation();
    }, true);


    $bouton2.addEventListener('click', event => {
        console.log('Bouton cliqué capture');
        // event.stopPropagation();
    }, true);

    $bouton.addEventListener('click', event => {
        console.log('Bouton cliqué capture');
        // event.stopPropagation();
    }, true);

    $troisiemeLevel.addEventListener('click', event => {
        console.log('TroisiemeLevel cliqué capture');
        // event.stopPropagation();
    }, true);

    $racine.addEventListener('click', event => {
        console.log('Racine cliqué capture');
        // event.stopPropagation();
    }, true);






    $bouton2.addEventListener('click', event => {
        console.log('Bouton2 cliqué capture');
        // event.stopPropagation();
    }, false);

    $bouton.addEventListener('click', event => {
        console.log('Bouton cliqué bubble');
        // event.stopPropagation();
    }, false);

    $troisiemeLevel.addEventListener('click', event => {
        console.log('TroisiemeLevel cliqué bubble');
        // event.stopPropagation();
    }, false);

    $deuxiemeLevel.addEventListener('click', event => {
        console.log('DeuxiemeLevel cliqué bubble');
        // event.stopPropagation();
    }, false);

    $premierLevel.addEventListener('click', event => {
        console.log('PremierLevel cliqué bubble');
        // event.stopPropagation();
    }, false);

    $racine.addEventListener('click', event => {
        console.log('Racine cliqué bubble');
        // event.stopPropagation();
    }, false);



});