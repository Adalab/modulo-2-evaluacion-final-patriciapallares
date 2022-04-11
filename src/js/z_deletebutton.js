function handleFavBtnClick(event) {
  event.preventDefault();
  const nameBtnSelected = event.currentTarget.name;

  const btnFavFound = favArray.find((btn) => btn.drinkId === nameBtnSelected);
  const btnFavFoundIndex = favArray.findIndex(
    (btn) => btn.drinkId === nameBtnSelected
  );
  favArray.splice(btnFavFoundIndex, 1);
  const markedItems = document.querySelectorAll('.fav_drink');
  for (const markedI of markedItems) {
    if (parseInt(nameBtnSelected) === parseInt(markedI.id)) {
      console.log('NO soy una igualdad pero me cumplo');
      markedI.classList.remove('fav_drink');
    };
  };
  paintFavDrinks();
  setFavLocalStorage();
  paintFavIf();
};

function listenerFavItem() {
  const deleteFavBtn = document.querySelectorAll('.js_delete');
  for (const btn of deleteFavBtn) {
    btn.addEventListener('click', handleFavBtnClick);
  };
};