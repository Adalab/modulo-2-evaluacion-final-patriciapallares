// función para guardar en LS
  // hago string favArray
  // guardo el string en LS con setItem

function setFavLocalStorage() {
  const stringDrinks = JSON.stringify(favArray);
  localStorage.setItem('usersFavDrinks', stringDrinks);
};

// función para cargar de LS
  // cargo el string de LS con getItem
  // compruebo si es diferente a null (vacío)
    // si sí es diferente: 
      // deshago 'favArrayLS' de sring
      // declaro que favArray = 'favArrayLS'
  // ejecuto:
    // función para pintar fav
  // compruebo si la largaria de favArray es mayor que cero
    // si sí es mayor: quito la clase hidden a la sección fav 

function getFavLocalStorage() {
  const LSDrinks = localStorage.getItem('usersFavDrinks');
  if (LSDrinks !== null) {
    const parseDrinks = JSON.parse(LSDrinks);
    favArray = parseDrinks;
    paintFavDrinks();
    paintFavIf();
  }
}

