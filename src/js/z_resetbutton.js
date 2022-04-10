// 5.3 Botón de reset que borra favoritos, lista, estilos y SL

// traer el botón a js
// escuchar el botón
// favArray = ''
// paintFav de nuevo
// SL de nuevo
// quita fav_drink class a todos los que lo tengan :S

// traer el botón a js
// const resetBtn = document.querySelector('.js_reset_button');

function handleResetClick(event) {
  event.preventDefault();
  console.log('soy el botón reset y me has clicado');
  favArray = [];

  const markedItems = document.querySelectorAll('.fav_drink');
  for (const markedI of markedItems) {
    markedI.classList.remove('fav_drink');
  };
  // paintFav de nuevo
  paintFavDrinks();
  // SL de nuevo
  setFavLocalStorage();
  favSection.classList.add('hidden');
  searchSection.classList.add('hidden');
  searchInput.value = ''
};

// escuchar el botón
resetBtn.addEventListener('click', handleResetClick);
