
const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const btnOuvrir = document.querySelector('#btn-ouvrir');
const modal = document.querySelector('#modal');
const btnFermer = document.querySelector('.btn-fermer');
const overlay = document.querySelector('.modal-overlay');


document.addEventListener('click', (e) => {
  if (e.target.id !== 'btn-ouvrir') {
    hideModal();
  }
});

modal.addEventListener('click', (e) => {
  e.stopPropagation();
});

let toggle = false;
// Ouvrir
btnOuvrir.addEventListener('click', () => {
  if (toggle === false) {
    showModal();
  } else {
    hideModal();
  }
});

// Fermer avec le bouton X
btnFermer.addEventListener('click', hideModal);

// Fermer avec le clic sur l'overlay
overlay.addEventListener('click', hideModal);

// Fermer avec Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle === true) {
    hideModal();
  }
});



function showModal() {
  console.log('show');

  const $title = modal.querySelector('.title');
  $title.textContent = inputTitle.value;

  const description = modal.querySelector('.content');
  description.textContent = inputDescription.value;

  modal.classList.remove('cache');
  document.body.style.overflow = 'hidden'; // Empêcher le scroll
  toggle = true;
}


function hideModal() {
  console.log('hide');
  modal.classList.add('cache');
  document.body.style.overflow = ''; // Réactiver le scroll
  toggle = false;
}