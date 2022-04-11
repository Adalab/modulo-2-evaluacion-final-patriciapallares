function paintFavDrinks() {
  let html = '';

  for (const favItem of favArray) {
    const placeholder = `https://via.placeholder.com/210x295/ffffff/666666/?text=${favItem.drinkName}`;

    html += `<li class ="drink_li js_drink_fav_item" id=${favItem.drinkId}>`;
    html += `<article class="drink_article">`;
    // 5.1 Borrar el favorito de la lista y de LS al hacer click sobre una x
    html += `<button name="${favItem.drinkId}" class="delete__icon js_delete"><p class="theX">×</p></button>`;
    // 2.4 Usar una imagen placeholder en caso que la bebida devuelta por la API no tenga una
    if (favItem.thumbnail !== '') {
      html += `<img class ="drink_image" src="${favItem.thumbnail}">`;
    } else {
      html += `<img class ="drink_image" src="${placeholder}">`;
    }
    html += `<h3 class="drink_title">${favItem.drinkName}</h3>`;
    html += `</article>`;
    html += `</li>`;
  }
  favList.innerHTML = html;
  listenerFavItem();
}
