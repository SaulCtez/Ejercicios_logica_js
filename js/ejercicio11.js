// Entrada de usuario: Crea un programa que pida al usuario ingresar su nombre
// y luego lo salude.
let nombre = prompt('Ingresa tu nombre');

if (nombre) {
    console.log("Hola " + nombre + ", ¡es un gusto poder saludarte!");
} else {
    console.log("No se ingreso ningún nombre.");
}