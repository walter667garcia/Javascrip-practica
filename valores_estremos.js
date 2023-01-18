// Operador.valueof() - obtener valores numericos b partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

let srt = new String("hola soy un atring");
console.log(srt);
console.log(srt.valueOf());

//NaN (not a number) - Infinity
let m = new Number("numero");
console.log(m);
console.log(isNaN(m));

let numerador = 19;
let divisor = 2;
let divisor2 = null;
let divisor3 = 0;

console.log(numerador / divisor);
console.log(numerador / divisor2);
console.log(numerador / divisor3);

//Como convertir los string b valores numericos con Number, Parseint y parsefloat

let numero = "5.90";
let nun2 = 17.2;

console.log(typeof numero);
//error concepto de suma de tipado devil
console.log(numero + nun2);
console.log(Number(numero) + nun2);
console.log(typeof parseInt(numero), parseInt(numero));
console.log(typeof parseFloat(numero), parseFloat(numero));

let nuna = 4;
console.log(parseInt(nuna));
console.log(parseFloat(nuna));

//Numeros hexadecimales base (16)
//SE UTILIZAN EN LA ASIGNACION DE LA MENORIA DEL PROCESADOR
let numberH = "0x3a5b7";
console.log(parseInt(numberH, 16));

//Obtener los valores maximo y minimo en JavaScript
let min_presicion = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_valor_JS);
console.log(max_valor_JS);

//como elevar u nnumero a una potencia (**)
console.log( 2**4)