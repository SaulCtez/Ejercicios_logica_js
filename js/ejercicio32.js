// Funciones flecha: Escribe una función flecha que reciba un array de números
// y devuelva un array con los números multiplicados por 2.


const multiXdos = (numeros) => {
    return numeros.map(numero => numero * 2);
  };
  let arrayNumeros = [1, 2, 3, 4, 5];
  let resultado = multiXdos(arrayNumeros);
  console.log("Primer array:", arrayNumeros); 
  console.log("Array modificado que multiplica X 2:", resultado);
  