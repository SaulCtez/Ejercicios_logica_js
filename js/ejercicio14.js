// Conversión de temperaturas: Crea un programa que convierta grados Celsius
// a Fahrenheit.

    let num = parseFloat(prompt("Ingrese los grados Celcius para convertirlos a Fahrenheit:"))

    if (isNaN(num)) {
        console.log("Dato no valido");

    } else {
        let grado = (num * 9 / 5)+32;
        console.log( num +" °C, Equivale a " + grado + " grado(s) Fahrenheit"  )
    }
