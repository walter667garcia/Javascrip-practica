//Metodos de arreglos en javascript

console.log([4, 5, 6, 7].at(0));
console.log([4, 5, 6, 7].push(9, 8, 8, 8, 8, 8, 8, 8, 8));
console.log([4, 5, 6, 7, 8, 10].pop());
console.log([4, 5, 6, 7].fill(" n "));
console.log([4, 5, 6, 7].join(" - "));
console.log([3,4, 5, 6, 7].shift());
console.log([4, 5, 6, 7].reverse());
console.log([4, 5, 6, 7].unshift(1));
console.log([4, 5, 6, 7].includes(6));
console.log([4, 5, 6, 7].map((elemento) => elemento * 2));
console.log([4, 5, 6, 7].filter((elemento) => elemento > 5));
console.log([4, 5, 6, 7].find((elemento) => elemento > 5));
console.log([4, 5, 6, 7].every((elemnto) => elemnto > 3));
console.log([4, 5, 6, 7].findIndex(elemento => elemento === 7 ));
console.log([3, 3, 2, 1].reduce((anterior, actual)=> anterior + actual ));
