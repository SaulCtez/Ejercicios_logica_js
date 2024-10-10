// 4. Clases básicas: Crea una clase Persona con propiedades nombre y edad , y un
// método que salude con el nombre de la persona.

// Definir la clase Persona
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
  }
  
  const persona4 = new Persona("Saul", 21);
  
  console.log(persona4.saludar());
  