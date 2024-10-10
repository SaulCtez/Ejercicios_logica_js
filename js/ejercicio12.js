// Verificación de edad: Pide al usuario su edad y muestra un mensaje
// dependiendo de si es mayor o menor de edad.

let edad =  parseInt(prompt('Ingresa tu edad'));

if (edad >=18){
    
    console.log('Eres mayor de dad')

}else if (edad < 18){
    console.log("Eres menor de edad")
}
else{
    console.log("No ingresaste tu edad")
}
