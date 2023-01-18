//Una cadena de texto con tu Nombre
let srt_nombre = "Walter";

//- Otra cadena de texto con tu Apellido
let srt_apellido = "Garcia Gomez";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = " * " + srt_nombre.concat(" " + srt_apellido + " *");
console.log(estudiante);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let longitud_estudiante = estudiante.length;
console.log(longitud_estudiante);

//- Una variable que contenga la primera letra del Nombre
let estudiante_inicio = estudiante[3];
console.log(estudiante_inicio);

//- Otra variable que contenga la última letra del Apellido
let estudiante_fin = estudiante[21];
console.log(estudiante_fin);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudiante_espacios = estudiante.trim().length;
console.log(estudiante_espacios);

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let booleana = estudiante.includes("Walter");
console.log(booleana);
