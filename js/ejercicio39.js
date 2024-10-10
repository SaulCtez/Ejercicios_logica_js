// Eventos: Crea un programa que detecte cuándo se ha presionado una tecla y
// lo muestre en la consola.

// const boton = document.getElementById('presion')

document.addEventListener('keydown', function(event) {
    console.log('Estas oprimiendo la tecla ' + event.key)
});