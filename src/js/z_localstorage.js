// 4.1 Guardar el listado de favoritos en LS
function setFavLocalStorage() {
  const stringDrinks = JSON.stringify(favArray);
  localStorage.setItem('usersFavDrinks', stringDrinks);
};

function getFavLocalStorage() {
  const LSDrinks = localStorage.getItem('usersFavDrinks');
  if (LSDrinks !== null) {
    const parseDrinks = JSON.parse(LSDrinks);
    favArray = parseDrinks;
    paintFavDrinks();
    if (favArray.length > 0) {
      favSection.classList.remove('hidden');
    };
  };
};