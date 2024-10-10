/*
Comparaciones: Escribe un programa que compare dos números y diga cuál
es mayor o si son iguales.
*/

let num1 =  parseInt(prompt('Ingresa el primer número'));
let num2 = parseInt(prompt('Ingresa el segundo número'));

if (num1 > num2){
    console.log("El numero mayor es " + num1)

} else if(num1== num2){
    console.log("Los numeros son iguales")
}else{
    console.log("El numeo mayor es : " + num2)
};