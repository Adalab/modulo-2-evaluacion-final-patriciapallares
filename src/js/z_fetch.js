// 2.1 Click en buscar -> conexión al API de bebidas.
function fetchFunction() {
  // 2.2 Recoger el texto de la usuaria para construir la URL de búsqueda
  const drink = searchInput.value;
  const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      searchArray = data.drinks.map((drink) => {
        const newDrink = {
          thumbnail: drink.strDrinkThumb,
          drinkName: drink.strDrink,
          drinkId: drink.idDrink,
        };
        return newDrink;
      });
      renderDrinksList();      // paintSearchDrinks();
    });
};