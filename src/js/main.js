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
let favoriteDrink = 'js_favoriteDrink';

function removeFavClass() {
  const favDrinks = document.querySelectorAll('.js_favoriteDrink');
  for (const drink of favDrinks) {
    drink.classList.remove('fav_drink');
    drink.classList.add('not_fav');
  };
};

// 3.1 Click sobre un cocktail
function listenerDrinkItem() {
  const liDrinks = document.querySelectorAll('.js_drinkItem');
  for (const drink of liDrinks) {
    drink.addEventListener('click', handleClickDrinks);
    const favIndex = favArray.findIndex((fav) => {
      return fav.drinkId === drink.id;
    });
    if (favIndex !== -1) {
      drink.classList.add('fav_drink');
    }
  }
};

// 2.3 Pintar una tarjeta con la imágen y nombre de la bebida por cada item que coincida con la búsqueda
function paintDrinks(array, list, fav) {
  let html = '';
  let favClass = fav;
  for (const searchItem of array) {
    const placeholder = `https://via.placeholder.com/210x295/ffffff/666666/?text=${searchItem.drinkName}`;

    html += `<li class ="drink_li js_drinkItem ${fav} " id=${searchItem.drinkId}>`;
    html += `<article class="drink_article">`;
    // 2.4 Usar una imagen placeholder en caso que la bebida devuelta por la API no tenga una
    if (searchItem.thumbnail !== '') {
      html += `<img class ="drink_image" src="${searchItem.thumbnail}">`;
    } else {
      html += `<img class ="drink_image" src="${placeholder}">`;
    }
    html += `<h3 class="drink_title">${searchItem.drinkName}</h3>`;
    html += `</article>`;
    html += `</li>`;
  }
  list.innerHTML = html;
  listenerDrinkItem();
  removeFavClass();
};

function handleClickDrinks(event) {
  // 3.1.1 Color de fondo y de fuente cambian.
  event.currentTarget.classList.toggle('fav_drink');

  // 3.1.2 Listado de favoritos en la parte izq de la pantalla, bajo el input de búsqueda
  const idDrinkSelected = event.currentTarget.id;
  const drinkFound = searchArray.find(
    (item) => item.drinkId === idDrinkSelected
  );
  const favDrinkFoundI = favArray.findIndex(
    (item) => item.drinkId === idDrinkSelected
  );
  if (favDrinkFoundI === -1) {
    favArray.push(drinkFound);
  } else {
    favArray.splice(favDrinkFoundI, 1);
  };

  paintDrinks(favArray, favList, favoriteDrink);
  removeFavClass();
  setFavLocalStorage();
};

// 2.1 Click en buscar -> conexión al API de bebidas.
function fetchFunction() {
  removeFavClass();
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
      paintDrinks(searchArray, searchList, '');
    });
};

function handleSearchClick(event) {
  event.preventDefault();
  fetchFunction();
  searchSection.classList.remove('hidden');
  favSection.classList.remove('hidden');
  removeFavClass();
};


function setFavLocalStorage() {
  const stringDrinks = JSON.stringify(favArray);
  localStorage.setItem('usersFavDrinks', stringDrinks);
};

function getFavLocalStorage() {
  const LSDrinks = localStorage.getItem('usersFavDrinks');
  if (LSDrinks === null) {
    setFavLocalStorage();
  } else {
    const parseDrinks = JSON.parse(LSDrinks);
    favArray = parseDrinks;
    paintDrinks(favArray, favList, favoriteDrink);
    if (favArray.length > 0) {
      favSection.classList.remove('hidden');
    };
  };
};

getFavLocalStorage();
removeFavClass();


searchBtn.addEventListener('click', handleSearchClick);
