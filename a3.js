//listas array o arreglo , vectores
//conjunto de variables puestas en orden

const lista = [1, "hola", false, undefined, null];

const lista1 = new Array(3, "hola", false);

const lista2 = new Array(3);
lista2[0] = 25;

const listas = [lista, lista1, lista2];

console.log(lista);
console.log(lista1);
console.log(lista2);
console.log(listas);

//objetos

const movil = {
  altura: 25,
  anchura: 15,
  marca: "BMW",
  isWhite: false,
  contactos: ["walter", "pedro", "juan"],
  tajeta: {
    marca: "sandisk",
    almacenamiento: 32,
  },
  "altura-tarjeta": 25,
};

movil.año = 2021;
movil.altura = 45;

console.log(movil.marca);
console.log(movil.tajeta.almacenamiento);
console.log(movil.año);

//Fechas o como se definen
//librerias de apollo Momnet.js

const ahora = new Date();
console.log(ahora);

const fecha_mils = new Date(10); //utilizando milisegundos
console.log(fecha_mils);

const fecha_cadena = new Date("march 10 2015");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const ano = ahora.getFullYear();

console.log(dia, mes, ano);
