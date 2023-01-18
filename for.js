//Bucles for
/*
for (inicializacion ; condicion; actualizar) {
    //esto es bucle
}
i = i +1
i += 1
i ++
*/

for (let i = 0; i < 10; i++) {
  //esto es el bucle
  console.log(i);
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//Estructura for...of
for (let valor of lista) {
  console.log(valor);
}

//Estructura forEach
let registro = [2, 4, 6, 8, 10, 12];

registro.forEach((datos) => {
  console.log(datos);
});

//Estructura for .... in
const persona = {
  nombre: "Walter",
  apellido: "Garcia",
  edad: 26,
  dpi: 3027404140105,
  "estado-civil": "soltero",
};

console.log(persona.dpi);

let props = "edad";
console.log(persona[props]);

for (let atributos in persona) {
  console.log(atributos);
  console.log(persona[atributos]);
}
