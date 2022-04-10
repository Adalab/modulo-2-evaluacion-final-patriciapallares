// función renderDrink con DOM si eso
// 4.1 Guardar el listado de favoritos en LS

// cogemos lo que queremos guardar
// lo transformo a string (stringify)
// en ese momento puedo hacer el set (solo quiere string)

// cuando saco los datos del storage he de validar comprobar que es diferente a null
// si se cumple, tengo que des-transformar el string (json.parse())
// uso esos datos

// cojo lo que quiero guardar, lo hago string, hago setItem
// quiero que se ejecute cuando la user clica o desclicka en favs
// funciona :D
function setFavLocalStorage() {
  // de array a string
  const stringDrinks = JSON.stringify(favArray);
  // añadimos a LS
  localStorage.setItem('usersFavDrinks', stringDrinks);
}

//  función para cargar favs del LS
// cargo la página, saco los datos de LS, verifico que tenga info (!==null), si hay algo, actualizo mi let global
function getFavLocalStorage() {
  // console.log('soy getFav siendo ejecutada');

  // obtenemos de LS
  const LSDrinks = localStorage.getItem('usersFavDrinks');
  // comprobar validez de los datos
  if (LSDrinks !== null) {
    // console.log('soy el else, debería pintar las favs');
    // parse de los datos del LS
    const parseDrinks = JSON.parse(LSDrinks);
    // lo guardo en la let Fav
    favArray = parseDrinks;
    // console.log(favArray);
    paintFavDrinks();
    // console.log(favArray.length);
    // solo se pinta favs si tiene algún elemento
    if (favArray.length > 0) {
      favSection.classList.remove('hidden');
    }
  }
}

