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


// función manejadora del evento click sobre las bebidas
  // busco el objeto de searchArray que coincide con el id del clickado
  // compruebo si está o no en favArray
    // si no está: push + añade clase fav
    // si sí está: splice + retira clase fav
  // ejecuta:
    // función para pintar fav
    // función para guardar en LS
    // función de condición para estilos

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
  }
  paintFavDrinks();
  setFavLocalStorage();
  paintFavIf();
};


// función para escuchar el evento click sobre las bebidas
  // selecciono todas las bebidas con SelectorAll
  // bucle con addEventListener por si se produce el click
  // findIndex para saber si el ID de drink está también en favArray
    // compruebo si está o no en favArray
      // si sí está: añade clase fav

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

// función manejadora del evento click sobre el botón buscar
  // preventDefault para evitar que se cargue la página de nuevo
  // ejecuto:
    // función fetch para traer la info de la API
    // función de condición para estilos
  // quito la clase hidden a las secciones search y fav
  // elimino el valor que la usuaria ha escrito en el input

function handleSearchClick(event) {
  event.preventDefault();
  fetchFunction();
  searchSection.classList.remove('hidden');
  favSection.classList.remove('hidden');
  paintFavIf();
  searchInput.value = ''
};

// ejecuto función para cargar de LS al cargar la página

getFavLocalStorage();

// evento click sobre el botón buscar

searchBtn.addEventListener('click', handleSearchClick);
