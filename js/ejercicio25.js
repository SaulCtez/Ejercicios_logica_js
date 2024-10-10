// Funciones y condicionales: Crea una función que reciba un número y
// devuelva true si es par y false si es impar.


function par(num) {
    return num % 2 === 0; 
  }
  let num1 = 10;
  let num2 = 11;
  
  console.log(`¿${num1} es un numero par?`, par(num1)); 
  console.log(`¿${num2} es un numero par?`, par(num2)); 
  