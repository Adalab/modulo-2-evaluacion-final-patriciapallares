'use strict';

//variables

const searchInput = document.querySelector('.js_search_input');
const searchBtn = document.querySelector('.js_search_button');
const resetBtn = document.querySelector('.js_reset_button');
const favSection = document.querySelector('.js_favorites_section');
const favList = document.querySelector('.js_favorites_list');
const searchSection = document.querySelector('.js_search_section');
let searchList = document.querySelector('.js_search_list');
let searchArray = [];
let favArray = [];

//functions
// 3.1 Click sobre un cocktail
function listenerDrinkItem() {
  const liDrinks = document.querySelectorAll('.js_drinkItem');
  for (const drink of liDrinks) {
    drink.addEventListener('click', handleClickDrinks);
  };
};

// 2.3 Pintar una tarjeta con la imágen y nombre de la bebida por cada item que coincida con la búsqueda
function paintDrinks(array, list) {
  let html = '';
  for (const searchItem of array) {
    const placeholder = `https://via.placeholder.com/210x295/ffffff/666666/?text=${searchItem.drinkName}`;

    html += `<li class ="drink_li js_drinkItem" id=${searchItem.drinkId}>`;
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
};


function handleClickDrinks(event) {
  console.log(event.currentTarget.id);
  // 3.1.1 Color de fondo y de fuente cambian.
  event.currentTarget.classList.toggle('fav_drink');

  // 3.1.2 Listado de favoritos en la parte izq de la pantalla, bajo el input de búsqueda
  // escuchar cuando clicamos la bebida
  // obtener a qué bebida le doy click
  // agregar al listado de favs

  const idDrinkSelected = event.currentTarget.id;
  console.log(searchArray);

  // método find para encontrar el elemento entero
  // previamente filter, pero mejor que me devuelva el elemento no sé.
  // dayana me ha ayudado a corregir lo de item.drinkId, no .id :D
  const drinkFound = searchArray.find(
    (item) => item.drinkId === idDrinkSelected
  );
  console.log(drinkFound);

  const favDrinkFoundI = favArray.findIndex((item) => item.drinkId === idDrinkSelected)
  console.log(favDrinkFoundI);

  // condición para que si el objeto no está en favoritos sea incorporado,( y si sí está en favoritos, que lo quite.) (ya llegará)
  if (favDrinkFoundI === -1){
    favArray.push(drinkFound);
  } else {
    favArray.splice(favDrinkFoundI,1);
  }
  paintDrinks(favArray, favList);
};

// 2.1 Click en buscar -> conexión al API de bebidas.
function fetchFunction() {
  // 2.2 Recoger el texto de la usuaria para construir la URL de búsqueda
  const drink = searchInput.value;
  const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
  //fetch drinks from server
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      // copié y pegué de la sesión de dayana, cambiando los parámetros y las claves
      searchArray = data.drinks.map((drink) => {
        const newDrink = {
          thumbnail: drink.strDrinkThumb,
          drinkName: drink.strDrink,
          drinkId: drink.idDrink,
        };
        return newDrink;
      });
      // no me las pintaba dentro de la función handleSearchClick pero sí aquí.
      paintDrinks(searchArray, searchList);
    });
};

function handleSearchClick(event) {
  event.preventDefault();
  fetchFunction();
  searchSection.classList.remove('hidden');
  favSection.classList.remove('hidden');
};

//events
searchBtn.addEventListener('click', handleSearchClick);

// función renderDrink con DOM si eso
// function renderDrink() {
//   const li = document.createElement('li');
//   searchList.appendChild(li);
//   li.classList.add('drink_li');
//   li.setAttribute('id', searchItem.drinkId);

//   const article = document.createElement('article');
//   li.appendChild(article);
//   article.classList.add('drink_article');

//   const img = document.createElement('img');
//   article.appendChild(img);
//   img.classList.add('drink_img');
//   img.setAttribute('src', searchItem.thumbnail);

//   const h3 = document.createElement('h3');
//   article.appendChild(h3);
//   h3.classList.add('drink_title');
//   const texth3 = document.createTextNode(searchItem.drinkName);
//   h3.appendChild(texth3);

//   return li;
// };

// function renderDrinksList(array) {
//   searchList.innerHTML = '';
//   for (const searchItem of array) {
//     const drink = renderDrink(searchItem);
//     searchList.appendChild(drink);
//   };
// };
