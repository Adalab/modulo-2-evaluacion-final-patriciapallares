// replicar la estructura de los listeners de las drinks
function handleFavBtnClick(event) {
  // borrar objeto de fav array con findIndex o algo no sé

console.log(event.currentTarget.name)
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
