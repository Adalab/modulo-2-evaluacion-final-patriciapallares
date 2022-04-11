// 2.3 Pintar una tarjeta con la imágen y nombre de la bebida por cada item que coincida con la búsqueda

// función para pintar un objeto de searchArray
  // declaro un placeholder
  // uso DOM para interrelacionar elementos con madres, clases, atributos, etc.
  // compruebo si el valor de thumbnail existe o no 
    // si sí existe: dejo la url como src de la imagen
    // si no existe: uso el placeholder como src de la imagen
  // retorno li

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

// función para pintar los objetos de searchArray
  // hago innerHTML en la ul de search con valor vacío
  // bucle para recorrer searchArray
    // declaro drink como cada objeto pintado al ejecutar renderDrink
    // inserto drink a la ul de search
  // ejecuto: 
    // función para escuchar el evento click sobre las bebidas

function renderDrinksList() {
  searchList.innerHTML = '';
  for (const searchItem of searchArray) {
    const drink = renderDrink(searchItem);
    searchList.appendChild(drink);
  }
  listenerDrinkItem();
}
