// Factorial: Escribe una función que calcule el factorial de un número.

function factorial(num) {
  if (num < 0) {
    return "¡Error!, no aplicable para números negativos";
  }
  if (num === 0) {
    return 1;
  }
  
  let resul = 1;
  
  for (let i = 1; i <= num; i++) {
    resul *= i;
  }

  return resul;
}

let numero = 8;
console.log(`El factorial de ${numero} es:`, factorial(numero));
