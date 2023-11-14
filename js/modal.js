const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModdal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModdal);
modalBtnClose.addEventListener('click', toggleModdal);
