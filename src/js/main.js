'use strict';

const searchInput = document.querySelector('.js_search_input');
const searchBtn = document.querySelector('.js_search_button');
const resetBtn = document.querySelector('.js_reset_button');
const favSection = document.querySelector('.js_favorites_section');
const favList = document.querySelector('.js_favorites_list');
const searchSection = document.querySelector('.js_search_section');
let searchList = document.querySelector('.js_search_list');
let searchArray = [];
let favArray = [];
let notFavHtml = '';



function handleClickDrinks(event) {
  // 3.1.2 Listado de favoritos en la parte izq de la pantalla, bajo el input de búsqueda
  const idDrinkSelected = event.currentTarget.id;
  const drinkFound = searchArray.find(
    (item) => item.drinkId === idDrinkSelected
  );
  const favDrinkFoundI = favArray.findIndex(
    (item) => item.drinkId === idDrinkSelected
  );
  if (favDrinkFoundI === -1) {
    // 3.1.1 Color de fondo y de fuente cambian.
    favArray.push(drinkFound);
    event.currentTarget.classList.add('fav_drink');
  } else {
    // 5.2 Borrar de favoritos de la lista al clicar sobre la bebida en la lista de búsqueda
    favArray.splice(favDrinkFoundI, 1);
    event.currentTarget.classList.remove('fav_drink');
  };
  paintFavDrinks();
  setFavLocalStorage();
  paintFavIf();
};

// 3.1 Click sobre un cocktail
function listenerDrinkItem() {
  const liDrinks = document.querySelectorAll('.js_drink_search_item');
  for (const drink of liDrinks) {
    drink.addEventListener('click', handleClickDrinks);
    const favIndex = favArray.findIndex((fav) => {
      return fav.drinkId === drink.id;
    });
    if (favIndex !== -1) {
      drink.classList.add('fav_drink');
    };
  };
};

function handleSearchClick(event) {
  event.preventDefault();
  fetchFunction();
  searchSection.classList.remove('hidden');
  favSection.classList.remove('hidden');
  paintFavIf();
  searchInput.value = '';
};

getFavLocalStorage();

searchBtn.addEventListener('click', handleSearchClick);
