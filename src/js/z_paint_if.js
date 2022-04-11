// función de condición para estilos
  // compruebo si la largaria de favArray es igual a cero
    // si sí es igual: añado la clase hidden a la sección fav 
    // si no es igual: quito la clase hidden a la sección fav 

function paintFavIf(){
  if (favArray.length === 0){
   favSection.classList.add('hidden');
 }else{
   favSection.classList.remove('hidden');
 }
}