// 2.3 Pintar una tarjeta con la imágen y nombre de la bebida por cada item que coincida con la búsqueda

// funciona tal cual, no cambiar_
// function paintSearchDrinks() {
//   let html = '';
//   for (const searchItem of searchArray) {
//     const placeholder = `https://via.placeholder.com/210x295/ffffff/666666/?text=${searchItem.drinkName}`;

//     html += `<li class ="drink_li js_drink_search_item" id=${searchItem.drinkId}>`;
//     html += `<article class="drink_article special">`;
//     // 2.4 Usar una imagen placeholder en caso que la bebida devuelta por la API no tenga una
//     if (searchItem.thumbnail !== '') {
//       html += `<img class ="drink_image" src="${searchItem.thumbnail}">`;
//     } else {
//       html += `<img class ="drink_image" src="${placeholder}">`;
//     }
//     html += `<h3 class="drink_title">${searchItem.drinkName}</h3>`;
//     html += `</article>`;
//     html += `</li>`;
//   }
//   searchList.innerHTML = html;
//   listenerDrinkItem();
// }

//functions
// 2.5 Pintar en HTML con innerHTML o DOM.
function renderDrink(data) {
  const placeholder = `https://via.placeholder.com/210x295/ffffff/666666/?text=${data.drinkName}`;

  const li = document.createElement('li');
  searchList.appendChild(li);
  li.classList.add('drink_li');
  li.classList.add('js_drink_search_item');
  li.setAttribute('id', data.drinkId);

  const article = document.createElement('article');
  li.appendChild(article);
  article.classList.add('drink_article');
  article.classList.add('special');

  const img = document.createElement('img');
  article.appendChild(img);
  img.classList.add('drink_image');
  if (data.thumbnail !== ''){
    img.setAttribute('src', data.thumbnail);
  } else {
    img.setAttribute('src', placeholder);
  };

  const h3 = document.createElement('h3');
  article.appendChild(h3);
  h3.classList.add('drink_title');
  const texth3 = document.createTextNode(data.drinkName);
  h3.appendChild(texth3);

  return li;
}

function renderDrinksList() {
  searchList.innerHTML = '';
  for (const searchItem of searchArray) {
    const drink = renderDrink(searchItem);
    searchList.appendChild(drink);
  }
  listenerDrinkItem();
}
