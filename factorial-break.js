//Factorial con while, if y break
let nun = 100;
let total = 1;
let i = 1;

while (i < nun) {
  i++;
  //Finalizamos el bucle con un nu: 10
  if (i > 10) {
    console.log("bucle terminado");
    break;
  }
  total = total * i;
}

//Mostramos el total, ya que guardo las operaciones
console.log("factorial con  break:");
console.log(total);
