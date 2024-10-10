// Array de números pares: Escribe un programa que filtre los números pares de
// un array.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let pares = numeros.filter(numero => numero % 2 === 0);

console.log(numeros)
console.log("De acuerdo con el arreglo, los números pares son:", pares);
