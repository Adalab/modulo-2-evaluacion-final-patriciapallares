// 7.1 Bebe con precaución: Modal moral
const modal = document.querySelector('.js_modal');
const closeBtn = document.querySelector('.js_close_btn');
const showModal = () => {
  modal.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
};
// setTimeout(showModal, 5000);
closeBtn.addEventListener('click', closeModal);