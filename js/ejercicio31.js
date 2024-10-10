// Callbacks: Crea una función que reciba un callback. Usa el callback para
// imprimir un mensaje en la consola.

/*
Callback: Es una función que se pasa como argumento a otra función y luego se ejecuta dentro de esa función. La idea básica es que una función se "llama de vuelta" (callback) en un momento específico, ya sea cuando ocurre algo en el futuro o cuando una tarea se completa.
*/


function miCallback(callback) {

    callback();
  }
  
  const mensaje = function() {
    console.log("¡Hola! usuari@.");
  };
  miCallback(mensaje);
  


  