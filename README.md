# Evaluación final módulo 2 Patricia Pallarés González

<!--
Notas presentación enunciado:
ASWK opcional

Buscador por nombre de bebidas del mundo.
-Cuando carga la página no hay nada.
-Pinta un listado de resultados
Se pueden añadir o no a fav

Api proporcionada por los profes. Enlace a la documentación.

Algunos cócteles no tienen imagen.
-opción 1. generador de imagen drink
-opción 2. diseñar una imagen default

Podemos usar innerHTML o DOM avanzado

PINTAR la lista de cócteles favoritos y lista general

Añadir estilos para diferenciar que ya está contenido en favoritos

Almacenamiento local

Reset borrar favoritos, lista, y SL
BONUS borrar de favoritos y quitar estilo diferenciador
BONUS2 añadir estilos D:

Normas:

max 11/04 a las 14
github pages

-->

## Interpretación del enunciado:

Queremos una aplicación web que contenga un listado de bebidas internacionales, que permita a la user des/marcar sus favoritas y que se guarde en LocalStorage.

La prioridad es tener un JS sólido.


1. Estructura básica en HTML

   - [x] 1.1 Un input de texto y un botón para buscar bebidas por su nombre.
   - [x] 1.2 Un listado de resultados donde se pinte la imágen y el nombre de la bebida.

2. Búsqueda

   - [x] 2.1 Click en buscar -> conexión al API de bebidas.
         (www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita)
   - [x] 2.2 Recoger el texto de la usuaria para construir la URL de búsqueda.
   - [x] 2.3 Pintar una tarjeta con la imágen y nombre de la bebida por cada item que coincida con la búsqueda.
   - [x] 2.4 Usar una imagen placeholder en caso que la bebida devuelta por la API no tenga una
   - [ ] 2.5 Pintar en HTML con innerHTML o DOM.

3. Favoritos

   - [x] 3.1 Click sobre un cocktail ->
     - [x] 3.1.1 Color de fondo y de fuente cambian.
     - [x] 3.1.2 Listado de favoritos en la parte izq de la pantalla, bajo el input de búsqueda (se recomienda crear una variable [ ] para las bebidas favoritas).
     - [x] 3.1.3 Las favoritas deben continuar en la página aun si se realiza otra búsqueda.

4. Almacenamiento local

   - [x] 4.1 Guardar el listado de favoritos en LS.

5. BONUS. Borrar favoritos

   - [x] 5.1 Borrar el favorito de la lista y de LS al hacer click sobre una x
         Añadir x a favs, evento sobre el click a la x, este hace que se borre de favArray y del storage. CÓMO SABE LA X A QUIÉN ME REFIERO, ¿con ID?
   - [x] 5.2 Borrar de favoritos de la lista al clicar sobre la bebida en la lista de búsqueda
   - [x] 5.3 Botón de reset que borra favoritos, lista, estilos y SL

6. BONUS. Afinar maquetación

   - [x] 6.1 Añadir estilos libremente (que los items estén a la misma altura)

7. BONUS MÍO:
   - [x] 7.1 Bebe con precaución: Modal moral
   - [ ] 7.2 Validación del valor de búsqueda


