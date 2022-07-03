 const refs = {
    openModalBtn: document.querySelector('.footer-link'),
    closeModalBtn: document.querySelector('.close__modal'),
    modal: document.querySelector('[data-modal]'),
  };

export function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('is-hidden');
}
 
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
 