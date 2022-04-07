'use strict';

console.log('>> Ready :)');

//variables

const searchInput = document.querySelector('.js_search_input');
const searchBtn = document.querySelector('.js_search_button');
const resetBtn = document.querySelector('.js_reset_button');
const favSection = document.querySelector('.js_favorites_section');
const favList = document.querySelector('.js_favorites_list');
const searchSection = document.querySelector('.js_search_section');
const searchList = document.querySelector('.js_search_list');

let searchArray = [];
let favArray = [];

//functions

function fetchFunction() {
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
        };
        return newDrink;
      });
      console.log(searchArray);
    });
  };

function handleSearchClick(event) {
  event.preventDefault();
  console.log('Soy un click');
  fetchFunction();
};
//events

searchBtn.addEventListener('click', handleSearchClick);

