//sesion 5 Numbers
let no_a = 5;
console.log(no_a);

let no_b = 0.1;
console.log(no_b);

//presion
let no_c = 0.2;
let res = no_b + no_c;
console.log(res);

//truco para redondiar un decimal hacia abajo valores "reales"
console.log(Math.round(res * 100) / 100);

//priincipales operaciones aritmeticas
let a = 3.5;
let b = 4.8;
//Suma (+)
console.log(a + b);

//Resta (-)
console.log(a - b);

//Multiplicacion  (*)
console.log(a * b);

//Divicion  (/)
console.log(a / b);

//reprecentacion de los numeros en cadenas de texto
console.log(typeof a);

let a_S = a.toString();
console.log(a_S, typeof a_S);

let no_str = "25";

//redondeo de numeros decimales
let c = 3.3;
let f = c * 3;

console.log(f);

// .toFixed(x) limita el numero de decimales que tiene la x
console.log(f.toFixed(2));
console.log(typeof f.toFixed(2));

let r = 3625.222365;
let k = 28465487678758;
console.log(r.toFixed(3));
console.log(k.toFixed(3));

//.toPrecision( x)  Limita el numero de cifras significativas
console.log(r.toPrecision(5));
console.log(k.toPrecision(5));
console.log( typeof r.toPrecision(5));
