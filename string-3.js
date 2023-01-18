//Metodos de cadenas de texto (parte 3)
//https://regexr.com  ayuda a comprender mas las expreciones redulares

let amistad = "La amistad se refiere al vínculo estrecho que se forma entre dos personas o un grupo. Este tipo de relación suele estar basado en la confianza, el afecto, la lealtad, la simpatía y el respeto que se depositan, de manera recíproca, los miembros de la relación.";

//obtener las veces que se encuentra la palabra
console.log(amistad.match(/f/g));

//consulta si existe una palabra  dentro del texto
console.log(amistad.includes("lealtad"));

//determinar si el texto comienza con una palabra
console.log(amistad.startsWith("La amistad"));

//determinar si el texto termina con un palabra
console.log(amistad.endsWith(" de la relación."))