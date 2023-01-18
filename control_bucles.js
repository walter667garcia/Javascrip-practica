//casos muy especificos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue;
  }
  console.log(lista[i]);
  let k = 100;

  if (lista[i] > 5) {
    console.log("bucle terminado");
    break;
  }
}

//Cual es el ambito de un bucle
//al acceder a una variable, objeto ect. tener en
//claro el origrn del mismo, local , global ect...

console.log(k);
