// 4. Promedio de un array: Crea una función que reciba un array de números y
// devuelva su promedio.


function calcpromedio(array) {
     
    let suma = 0; 
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    let promedio = suma / array.length;
  
    return promedio; 
  }
  
  
  let numeros = [10, 20, 30, 40, 50];
  console.log(numeros);
  console.log("El promedio del array es:", calcpromedio(numeros));
  