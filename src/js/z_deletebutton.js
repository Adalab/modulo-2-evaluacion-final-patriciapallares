// función para que me quite el colorinchi de la lista de la búsqueda cuando x

function removeFavClass(event) {
  const favItems = document.querySelectorAll('.fav_drink');
  for (const favI of favItems) {
    // si el id de el searchli y el favli coinciden, quítame la clase fav_drink :S
    
  }
}


// replicar la estructura de los listeners de las drinks
function handleFavBtnClick(event) {
  // borrar objeto de fav array con findIndex o algo no sé
  // ahora ya sabemos que sí o sí es fav, así que no sé si habría que hacer findIndex.
  // pruevo a hacer splice directamente como una chula
  // me he flipado creo
  // sigo necesitando la posición para eliminarlo
  const nameBtnSelected = event.currentTarget.name;
  let idBtnSelected = event.currentTarget.id;
  console.log(idBtnSelected);

  console.log(nameBtnSelected);
  const btnFavFound = favArray.find((btn) => btn.drinkName === nameBtnSelected);
  console.log(btnFavFound);
  const btnFavFoundIndex = favArray.findIndex(
    (btn) => btn.drinkName === nameBtnSelected
  );
  console.log(btnFavFoundIndex);
  // arrasamos con el objeto y lo quitamos de favArray
  favArray.splice(btnFavFoundIndex, 1);
  // no me lo ha despintado aaaaaaaaa
  paintFavDrinks();
  setFavLocalStorage();
  removeFavClass();
};




//función para que el click quite de favArray el elemento
function listenerFavItem() {
  const deleteFavBtn = document.querySelectorAll('.js_delete');
  console.log('me estoy ejecutando');
  // escuchar el click
  // la constante tiene que ser local para que funcione
  for (const btn of deleteFavBtn) {
    // es btn, no lo de la derecha
    btn.addEventListener('click', handleFavBtnClick);
    console.log('existo');
  };
};

console.log(favArray);
// const idDrinkSelected = event.currentTarget.id;
// // console.log(searchArray);
// const drinkFound = searchArray.find((item) => item.drinkId === idDrinkSelected);
// // console.log(drinkFound);

// const favDrinkFoundI = favArray.findIndex(
//   (item) => item.drinkId === idDrinkSelected
// );
// // console.log(favDrinkFoundI);

// // condición para que si el objeto no está en favoritos sea incorporado,( y si sí está en favoritos, que lo quite.) (ya llegará)
// if (favDrinkFoundI === -1) {
//   favArray.push(drinkFound);
// } else {
//   favArray.splice(favDrinkFoundI, 1);
// }
