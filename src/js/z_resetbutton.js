// 5.3 Botón de reset que borra favoritos, lista, estilos y SL
function handleResetClick(event) {
  event.preventDefault();
  console.log('soy el botón reset y me has clicado');
  favArray = [];
  paintFavDrinks();
  setFavLocalStorage();
  favSection.classList.add('hidden');
  searchSection.classList.add('hidden');
  searchInput.value = ''
};
resetBtn.addEventListener('click', handleResetClick);