function paintFavIf(){
  console.log(favArray.length);
  if (favArray.length === 0){
   favSection.classList.add('hidden');
 }else{
   favSection.classList.remove('hidden');
 }
}