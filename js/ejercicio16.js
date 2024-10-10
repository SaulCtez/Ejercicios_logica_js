// Palíndromos: Pide al usuario ingresar una palabra y determina si es un
// palíndromo (se lee igual al derecho y al revés).


let palabra = prompt("Ingresa una palabra para comprobar si es un palíndromo:");

let minuscula = palabra.toLowerCase();

let palabraReves = minuscula.split('').reverse().join('');

if (minuscula === palabraReves) {
  console.log(palabra + " es un palíndromo.");
} else {
  console.log(palabra + " no es un palíndromo.");
}
