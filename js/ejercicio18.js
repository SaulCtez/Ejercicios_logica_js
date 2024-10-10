// Suma de elementos de un array: Crea un programa que sume todos los
// números de un array.


let numeros = [1, 2, 3, 4, 5, 6, 7];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma de los siguientes elementos", numeros)
console.log("Da como resultado:", suma);
