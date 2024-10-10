// Validación de entrada: Pide al usuario que ingrese un número y verifica si es
// realmente un número. Si no lo es, muestra un mensaje de error.

let num = parseFloat(prompt("Ingrese un número:"))

if (isNaN(num)) {
    console.log("No se ingreso un número");

} else {
    console.log("Ingresaste el número " + num)
}
