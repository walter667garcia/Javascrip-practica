/*Walter Garcia Gomez 
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/


//definiecion de variables
let nombre = "walter garcia gomez";
let edad = 26;

//definicion de una fecha por valores
const fecha_nacimiento = new Date(1996, 6, 25);

//definicion de un valor boolean
const desarrollador = true;

//definicion de un objeto
const libro = {
  titulo: "El viejo y el mar",
  autor: "Ernest Hemingway",
  fecha: "1 de septiembre de 1951",
  ur: "https://es.wikipedia.org/wiki/El_viejo_y_el_mar",
};

//definicion de una lista, que contiene un poco de todo

const lista = [nombre, edad, fecha_nacimiento, desarrollador, libro];
console.log(lista);
