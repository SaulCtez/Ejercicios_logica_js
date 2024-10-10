// Eliminar elementos del DOM: Crea un programa que elimine el último
// elemento de una lista ul cuando se haga clic en un botón.

const botonEliminar = document.getElementById('delete');
const listados = document.getElementById('listados');

botonEliminar.addEventListener('click', function() {
    if (listados.children.length > 0) {
        listados.removeChild(listados.lastElementChild);
    } else {
        alert("sin elementos para borrar");
    }
});