// Metodos mas utilizados con cadenas de caracteres
//como obtener la longitud de un caracter

let srt = "hola soy una cadena";
console.log(srt.length);

//Obtener partes de cadenas de caracters
// para ello tenemos  slice() substring() subsrt()
let cadena = "He sacado buenas calificaciones"

let slice_srt = cadena.slice(0,12);
console.log(slice_srt);

let substring_srt = cadena.substring(0,12);
console.log(substring_srt);

let subsrt_srt = cadena.substr(0,12);
console.log(subsrt_srt);

///Remplazar el contenido en la parte de un acadena

let cadena1 = "hola me llamo walter garcia";
console.log(cadena1);
let cambio = cadena1.replace("garcia", "gomez");

//al utilizar string solo remplaza la primera instancia 
console.log(cambio);

let amistad = "La amistad se refiere al vínculo estrecho que se forma entre dos personas o un grupo. Este tipo de relación suele estar basado en la confianza, el afecto, la lealtad, la simpatía y el respeto que se depositan, de manera recíproca, los miembros de la relación.";
let cambio2 = amistad.replace("la", "lA");

//al utilizar string solo remplaza la primera instancia 
console.log(cambio2);

//Al utilizar la exprecion regular /g (global), remplaza todas las instancias
let cambio3 = amistad.replace(/la/g, "lA");
console.log(cambio3);