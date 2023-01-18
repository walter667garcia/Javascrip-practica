//factorial con while
let nun = 10;
let total = 1;
let i = 1;

//while dejara de ejecutarce cuando i = 10
while (i < nun) {
  i++;
  total = total * i;
}

//mostramos el resultado
console.log("factorial en While:");
console.log(total);
