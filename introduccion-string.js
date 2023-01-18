//Session 4 - String (cadena de caracteres)

let srt = 'hola soy una cadena de texto';
let str_1 = "cadena con comillas dobles";

console.log(srt);

let srt_comillas = "Me ordenaron: \"sacar la basura\"";
let srt_comillas_simples = 'Me ordenaron: "sacar la basura"';
let srt_comillas_simples_2 = 'Me ordenaron: \'sacar la basura\'';
let srt_comillas_dobles = "Me ordenaron: 'sacar la basura'";

console.log(srt_comillas);
console.log(srt_comillas_simples_2);
console.log(srt_comillas_dobles);

///comillas invertidas (backticks) templace
let srt_backticks = `esto es una cadena con backticks`

console.log(srt_backticks);

let edad = 26
let nombre = "walter"

let saludo = `Hola, ${nombre} tu tienes ${edad} años`;
console.log(saludo);


//PLantillas  Html

let plantilla = `
<html>
  <h1> hola ${nombre} como estas </h1>
  <p> esto es parafo </p>
</html>
`
console.log(plantilla);

///Introduccion de variables en html

let libros = ["El viejo y el mar","mansion pajaro serpiente","la biblia"]



