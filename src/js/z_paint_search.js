// 2.3 Pintar una tarjeta con la imágen y nombre de la bebida por cada item que coincida con la búsqueda
function paintSearchDrinks() {
  let html = '';
  for (const searchItem of searchArray) {
    const placeholder = `https://via.placeholder.com/210x295/ffffff/666666/?text=${searchItem.drinkName}`;

    html += `<li class ="drink_li js_drink_search_item" id=${searchItem.drinkId}>`;
    html += `<article class="drink_article special">`;
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
  listenerDrinkItem();
}
