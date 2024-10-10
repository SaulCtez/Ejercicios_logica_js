/*
Condicionales: Crea un programa que verifique si un número es positivo,
negativo o cero, e imprima el resultado.
*/

let num1 =  parseInt(prompt('Ingresa un número'));

if (num1 > 0){
    console.log("El numero ingresado es positivo " + num1)

} else if(num1==0){
    console.log("El número es 0")
}else{
    console.log("El numeo ingresado es negativo: " + num1)
};