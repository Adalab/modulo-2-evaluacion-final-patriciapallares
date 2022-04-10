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
  // console.log('soy un click en las bebidas');
  // console.log(event.currentTarget.id);
  // 3.1.1 Color de fondo y de fuente cambian.

  // 16:05 me toca comentar esto:
  // event.currentTarget.classList.toggle('fav_drink');
  event.currentTarget.classList.add('fav_drink');

  // 3.1.2 Listado de favoritos en la parte izq de la pantalla, bajo el input de búsqueda
  // escuchar cuando clicamos la bebida
  // obtener a qué bebida le doy click
  // agregar al listado de favs

  const idDrinkSelected = event.currentTarget.id;
  // console.log(searchArray);

  // método find para encontrar el elemento entero
  // previamente filter, pero mejor que me devuelva el elemento no sé.
  // dayana me ha ayudado a corregir lo de item.drinkId, no .id :D
  const drinkFound = searchArray.find(
    (item) => item.drinkId === idDrinkSelected
  );
  // console.log(drinkFound);

  const favDrinkFoundI = favArray.findIndex(
    (item) => item.drinkId === idDrinkSelected
  );
  // console.log(favDrinkFoundI);

  // condición para que si el objeto no está en favoritos sea incorporado,( y si sí está en favoritos, que lo quite.) (ya llegará)
  if (favDrinkFoundI === -1) {
    favArray.push(drinkFound);
    event.currentTarget.classList.add('fav_drink');
  } else {
    favArray.splice(favDrinkFoundI, 1);
    event.currentTarget.classList.remove('fav_drink');
  }
  paintFavDrinks();
  setFavLocalStorage();
  // console.log(favArray);
}

// 3.1 Click sobre un cocktail
function listenerDrinkItem() {
  // console.log(searchArray);
  const liDrinks = document.querySelectorAll('.js_drink_search_item');
  for (const drink of liDrinks) {
    drink.addEventListener('click', handleClickDrinks);

    // que me mantenga los estilos de fav en siguientes búsquedas
    // supongo que esto podría estar en una función fuera, vamos a ver si funciona
    const favIndex = favArray.findIndex((fav) => {
      return fav.drinkId === drink.id;
    });
    // console.log(favIndex);

    if (favIndex !== -1) {
      drink.classList.add('fav_drink');
    }
  }
}


function handleSearchClick(event) {
  event.preventDefault();
  fetchFunction();
  searchSection.classList.remove('hidden');
  favSection.classList.remove('hidden');
};

// la ejecuto cuando se carga la página
getFavLocalStorage();

//events

searchBtn.addEventListener('click', handleSearchClick);
