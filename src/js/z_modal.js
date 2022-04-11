// 7.1 Bebe con precaución: Modal moral

// ventana modal con mensaje y botón de cerrar
  // constantes
  // función para mostrar ventana
  // fucnión para cerrar ventana
  // evento click sobre el botón cerrar

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