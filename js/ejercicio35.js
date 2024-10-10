// Objetos y métodos: Crea un objeto que represente una calculadora con
// métodos para sumar, restar, multiplicar y dividir.


const calculadora = {

    sumar: function(a, b) {
      return a + b;
    },

    restar: function(a, b) {
      return a - b;
    },

    multiplicar: function(a, b) {
      return a * b;
    },

    dividir: function(a, b) {
      if (b === 0) {
        return "No se puede dividir entre 0";
      } else {
        return a / b;
      }
    }
  };
  console.log("Resultados de operaciones basicas")
  console.log(calculadora.sumar(8, 8));       
  console.log(calculadora.restar(8, 8));    
  console.log(calculadora.multiplicar(8, 8)); 
  console.log(calculadora.dividir(8, 8));     
  