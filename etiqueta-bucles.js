//break continue
//labels
let unidades = 0;
let decenas = 0;

bucleDecena: while (true) {
  bucleUnidad: while (true) {
    console.log(`El numero actual: ${unidades}${decenas}`);
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break bucleUnidad;
    }
    if (decenas === 2) {
      break bucleDecena;
    }
  }
  decenas++;
}

console.log("esto ya ha terminado");
