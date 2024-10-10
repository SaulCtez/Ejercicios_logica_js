// Crear elementos en el DOM: Escribe un programa que añada un nuevo
// elemento li a una lista ul en HTML al hacer clic en un botón.

const boton = document.getElementById('cambialist');
const lista = document.getElementById('lista');
const nuevoElementoInput = document.getElementById('elementoNuevo');

boton.addEventListener('click', function() {
    const nuevoElementoTexto = nuevoElementoInput.value;
        if (nuevoElementoTexto) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nuevoElementoTexto;

        lista.appendChild(nuevoElemento);

        nuevoElementoInput.value = ''; 
    } else {
        alert("Por favor, escribe un elemento.");
    }
});
