// Manipulación del DOM: Crea un programa que cambie el texto de un párrafo
// en una página HTML al hacer clic en un botón.

const boton = document.getElementById('cambiatxt');
const parrafo = document.getElementById('texto');


boton.addEventListener('click', function() {
    
    parrafo.textContent = 'Hola desde JS, ¡Se modificó el texto!';
});