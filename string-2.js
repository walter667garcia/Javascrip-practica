//Metodos de cadenas de texto (parte 2)
let input = "Escorpio";
let db = "escorpio";

//Inposible coincidir mayusculas con minusculas
console .log(input === db)

//metodos toLowerCase() toUpperCase() resuelve el problema
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase === db.toLowerCase)


//Formas de concatenar cadenas de caracteres

let srt_1 = "hola soy walter";
let srt_2 = "garcia gomez 26";

console.log(srt_1.concat(" ", srt_2));
console.log(srt_1 +" "+ srt_2 + " algo mas");
console.log(`${srt_1} ${srt_2}`)

//Eliminar los espacios dse un acadena string
let srt_3 = "  Manipulacion de espacios en cadenas de caracteres string.  ";

console.log(srt_3.length);

//trim()
console.log(srt_3.trim().length);
console.log(srt_3.trimStart().length);
console.log(srt_3.trimEnd().length);

//obtener el caracter que hay en cierta posicion
let srt_4 = "definiendo la parte 4 de strings"; // ["h","o","l","".....]

console.log(srt_4.charAt(17));
console.log(srt_4[17]);


//Obtener la posicion de una palabra destro de un string
let srt_5 = "hola soy walter garcia gomez";
//toma la posicion del primer indice de la cadena
console.log(srt_5.indexOf("gomez"));
//al no escontrar la palabra pinta la posicion -1
console.log(srt_5.indexOf("gomkez"));

console.log(srt_5[23])