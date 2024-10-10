// Buscar en un array: Escribe un programa que busque un valor en un array y
// muestre su posición.


let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let valor = 5;

let posicion = numeros.indexOf(valor);
console.log (numeros)

if (posicion !== -1) {
  console.log("El valor", valor, "se encuentra en la posición:", posicion + 1);
} else {
  console.log("El valor", valor, "no se encontró en el array.");
}
