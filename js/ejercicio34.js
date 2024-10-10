// Herencia: Crea una clase Estudiante que herede de Persona y agregue la
// propiedad grado . Agrega un método para imprimir el grado.


class Persona {
    constructor(nombre, carrera) {
      this.nombre = nombre;
      this.carrera = carrera;
    }
  
    hola() {
      console.log(`Hola, mi nombre es ${this.nombre} y estudio ${this.carrera}.`);
    }
  }
  class Estudiante extends Persona {
    constructor(nombre, carrera, cuatrimestre) {
      super(nombre, carrera);
      this.cuatrimestre = cuatrimestre; 
    }
 
    imprimirCuatrimestre() {
      console.log(`Curso el ${this.cuatrimestre} cuatrimestre.`);
    }
  }
  const estudiante1 = new Estudiante("Saul", "Desarrollo de Software", "Décimo");
  estudiante1.hola(); 
  estudiante1.imprimirCuatrimestre(); 
  