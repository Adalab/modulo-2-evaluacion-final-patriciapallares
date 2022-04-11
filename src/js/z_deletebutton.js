// función manejadora del evento click sobre el botón x (borrar una bebida fav)
  // preventDefault para evitar que se cargue la página de nuevo
  // guardo el nombre(id) del botón x clickado
  // findIndex para saber qué posición tiene el elemento que coincide en id
  // splice para eliminar el objeto de favArray
  // bucle para recorrer los elementos que contienen la clase fav
  // compruebo si algún elemento coincide en id con el clickado
    // si sí coincide: quita clase fav (de searchSection)
  // ejecuto:
    // función para pintar fav
    // función para guardar en LS
    // función de condición para estilos

function handleFavBtnClick(event) {
  event.preventDefault();
  const nameBtnSelected = event.currentTarget.name;
  const btnFavFoundIndex = favArray.findIndex(
    (btn) => btn.drinkId === nameBtnSelected
  );
  favArray.splice(btnFavFoundIndex, 1);
  const markedItems = document.querySelectorAll('.fav_drink');
  for (const markedI of markedItems) {
    if (parseInt(nameBtnSelected) === parseInt(markedI.id)) {
      markedI.classList.remove('fav_drink');
    };
  };
  paintFavDrinks();
  setFavLocalStorage();
  paintFavIf();
};

// función para escuchar el evento click sobre el botón x (borrar una bebida fav)
  // selecciono todos los botones x
  // bucle con addEventListener por si se produce el click

function listenerFavItem() {
  const deleteFavBtn = document.querySelectorAll('.js_delete');
  for (const btn of deleteFavBtn) {
    btn.addEventListener('click', handleFavBtnClick);
  };
};