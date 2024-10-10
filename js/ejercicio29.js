// Contar vocales: Crea una función que cuente cuántas vocales hay en una
// palabra.


function contarVocales(palabra) {
    palabra = palabra.toLowerCase();

    let contador = 0;

    const vocales = "aeiou";
  
    // con el ciclo for se recorre cada letra de la palabra, y con la condicon if se verifica si la letra actual es una vocal
    for (let i = 0; i < palabra.length; i++) {      
      if (vocales.includes(palabra[i])) {
        contador++;
      }
    }
    return contador;
  }
  let palabra = "constantinopla";

  console.log(`La palabra "${palabra}" tiene ${contarVocales(palabra)} vocales.`);