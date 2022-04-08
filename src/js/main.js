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

function handleClickDrinks(event) {
  console.log(event.currentTarget.id);
}

// listener de las bebidas
// UN PUTO PUNTO EN '.JS NO ME DEJABA AVANZARRRR
function listenersDrinkItem() {
  const liDrinks = document.querySelectorAll('.js_drinkItem');
  for (const drink of liDrinks) {
    drink.addEventListener('click', handleClickDrinks);
  };
};


function paintDrinks() {
  let html = '';
  for (const searchItem of searchArray) {
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
  searchList.innerHTML = html;
  listenersDrinkItem();
};

function fetchFunction() {
  // pendiente entender bien cada paso de esto
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
      paintDrinks(searchArray);
    });
}

function handleSearchClick(event) {
  event.preventDefault();
  fetchFunction();
}

//events

searchBtn.addEventListener('click', handleSearchClick);

