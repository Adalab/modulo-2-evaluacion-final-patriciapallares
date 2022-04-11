// 5.3 Botón de reset que borra favoritos, lista, estilos y SL

// función manejadora del evento click sobre el botón reset
  // preventDefault para evitar que se cargue la página de nuevo
  // vacío el contenido de favArray con []
  // ejecuto:
    // función para pintar fav
    // función para guardar en LS
  // añado hidden a las secciones fav y search
  // elimino el valor que la usuaria ha escrito en el input

function handleResetClick(event) {
  event.preventDefault();
  favArray = [];
  paintFavDrinks();
  setFavLocalStorage();
  favSection.classList.add('hidden');
  searchSection.classList.add('hidden');
  searchInput.value = ''
};

// evento click sobre el botón reset

resetBtn.addEventListener('click', handleResetClick);
