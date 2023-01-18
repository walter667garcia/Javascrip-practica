//Comparaciones

//Igualdad

if (5 == 5) {
  console.log("5 es igual a 5");
}

if (5 === 5) {
  console.log("5 es exactamenre igual a 5");
}

let a = 5;
let b = "5";

//== solo compara el valor
if (a == b) {
  console.log("a es igual a b - debil");
}

//=== compara el valor y el tipo de datos
if (a === b) {
  console.log("a es igual a b - fuerte");
}

let c = 4;
let d = "4";

if (c != d) {
  console.log("c es diferente de d - debil");
}

if (c !== d) {
  console.log("c es diferente de d - fuerte");
}

//comparaciones mayor que y menor que
let max = 15;
let min = 4;

if (max > min) {
  console.log("max es mayor que min");
}

if (max >= min) {
  console.log("max es mayor o igual  que min");
}

if (min < min) {
  console.log("min es mayor que max");
}

if (min <= min) {
  console.log("min es mayor o igual  que max");
}
