// replicar la estructura de los listeners de las drinks
function handleFavBtnClick(event) {
  event.preventDefault();
  // borrar objeto de fav array con findIndex o algo no sé
  // ahora ya sabemos que sí o sí es fav, así que no sé si habría que hacer findIndex.
  // pruevo a hacer splice directamente como una chula
  // me he flipado creo
  // sigo necesitando la posición para eliminarlo
  const nameBtnSelected = event.currentTarget.name;

  const btnFavFound = favArray.find((btn) => btn.drinkId === nameBtnSelected);
  const btnFavFoundIndex = favArray.findIndex(
    (btn) => btn.drinkId === nameBtnSelected
  );
  // arrasamos con el objeto y lo quitamos de favArray
  favArray.splice(btnFavFoundIndex, 1);
  // no me lo ha despintado aaaaaaaaa

  // función para que me quite el colorinchi de la lista de la búsqueda cuando x
  // no he sabido hacerlo en otra función porq necesito el current event tío
  const markedItems = document.querySelectorAll('.fav_drink');
  for (const markedI of markedItems) {
    // si el id de markI ya no está en ningun objeto de favArray, quítame la clase .fav_drink
    console.log(markedI.id);
    console.log(nameBtnSelected);

    // me saca del atoramiento por ahora
    if (parseInt(nameBtnSelected) !== parseInt(markedI)) {
      console.log('NO soy una igualdad pero me cumplo');
      markedI.classList.remove('fav_drink');
    };
  };
  paintFavDrinks();
  setFavLocalStorage();
  paintFavIf();
};

//función para que el click quite de favArray el elemento
function listenerFavItem() {
  const deleteFavBtn = document.querySelectorAll('.js_delete');
  // escuchar el click
  // la constante tiene que ser local para que funcione
  for (const btn of deleteFavBtn) {
    // es btn, no lo de la derecha
    btn.addEventListener('click', handleFavBtnClick);
  };
};

