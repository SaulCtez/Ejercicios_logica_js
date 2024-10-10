// Número par o impar: Escribe un programa que pida un número al usuario y
// diga si es par o impar.

try {
    let num = parseInt(prompt("Ingresa un número para comprobar si es par o impar"))
    if (isNaN(num)) {
        console.log("No se ingresó un número válido.");
    } else {
        if (num % 2 === 0) {
            console.log(num + " es un número par.");
        } else {
            console.log(num + " es un número impar.");
        }
    }
} catch (error) {
    console.log("Se produjo un error: " + error.message);
}