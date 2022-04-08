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
let favoriteDrink = 'js_favoriteDrink'



//functions


function removeFavClass (){
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

  // que me mantenga los estilos de fav en siguientes búsquedas
  // supongo que esto podría estar en una función fuera, vamos a ver si funciona


    const favIndex = favArray.findIndex((fav) => {
      return fav.drinkId === drink.id;
    });
    console.log(favIndex);

    if (favIndex !== -1) {
      drink.classList.add('fav_drink');
    };
  };
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
  };
  list.innerHTML = html;
  listenerDrinkItem();
};



function handleClickDrinks(event) {
  // console.log(event.currentTarget.id);
  // 3.1.1 Color de fondo y de fuente cambian.

  // 16:05 me toca comentar esto:
  // event.currentTarget.classList.toggle('fav_drink');
  event.currentTarget.classList.toggle('fav_drink');

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
  } else {
    favArray.splice(favDrinkFoundI, 1);
  }

  paintDrinks(favArray, favList, favoriteDrink);
  removeFavClass();
  setFavLocalStorage();
  // console.log(favArray);
}

// 2.1 Click en buscar -> conexión al API de bebidas.
function fetchFunction() {
  removeFavClass();

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
      paintDrinks(searchArray, searchList, '');
    });
}

function handleSearchClick(event) {
  event.preventDefault();
  fetchFunction();
  searchSection.classList.remove('hidden');
  favSection.classList.remove('hidden');
  removeFavClass();
}

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

// 4.1 Guardar el listado de favoritos en LS

// cogemos lo que queremos guardar
// lo transformo a string (stringify)
// en ese momento puedo hacer el set (solo quiere string)

// cuando saco los datos del storage he de validar comprobar que es diferente a null
// si se cumple, tengo que des-transformar el string (json.parse())
// uso esos datos

// cojo lo que quiero guardar, lo hago string, hago setItem
// quiero que se ejecute cuando la user clica o desclicka en favs
// funciona :D
function setFavLocalStorage() {
  // de array a string
  const stringDrinks = JSON.stringify(favArray);
  // añadimos a LS
  localStorage.setItem('usersFavDrinks', stringDrinks);
}

//  función para cargar favs del LS
// cargo la página, saco los datos de LS, verifico que tenga info (!==null), si hay algo, actualizo mi let global
function getFavLocalStorage() {
  // console.log('soy getFav siendo ejecutada');

  // obtenemos de LS
  const LSDrinks = localStorage.getItem('usersFavDrinks');
  // comprobar validez de los datos
  if (LSDrinks === null) {
    // console.log('LS está vacío, ejecuto setFav');
    // no sé // o sí, hago un poco de loop
    setFavLocalStorage();
  } else {
    // console.log('soy el else, debería pintar las favs');
    // parse de los datos del LS
    const parseDrinks = JSON.parse(LSDrinks);
    // lo guardo en la let Fav
    favArray = parseDrinks;
    // console.log(favArray);
    paintDrinks(favArray, favList, favoriteDrink);
    // console.log(favArray.length);
    // solo se pinta favs si tiene algún elemento
    if (favArray.length > 0) {
      favSection.classList.remove('hidden');
    }
  }
}

// la ejecuto cuando se carga la página
getFavLocalStorage();
removeFavClass();


// const favList = document.querySelector('.js_favorites_list');

console.log(favArray);

// quiero quitar la clase fav_drink a los items de la columna de favs

