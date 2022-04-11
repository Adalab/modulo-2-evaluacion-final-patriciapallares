'use strict';
const modal = document.querySelector('.js_modal');
const closeBtn = document.querySelector('.js_close_btn');

const showModal = () => {
  modal.classList.remove('hidden');
};

// setTimeout(showModal, 5000);

const closeModal = () => {
  modal.classList.add('hidden');
};
closeBtn.addEventListener('click', closeModal);