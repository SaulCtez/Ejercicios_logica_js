// Máximo y mínimo en un array: Escribe una función que encuentre el valor
// más grande y el más pequeño en un array de números.

function minimoYmaximo(array) {
  
    let maximo = array[0];
    let minimo = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
        maximo = array[i]; 
      }
      if (array[i] < minimo) {
        minimo = array[i];
      }
    }
    return {
      maximo: maximo,
      minimo: minimo
    };
  }
  
  let numeros = [10, 20, 5, 40, 15];
  let resultado = minimoYmaximo(numeros);
  console.log(numeros)
  console.log("El valor más grande es:", resultado.maximo);
  console.log("El valor más pequeño es:", resultado.minimo); 
  