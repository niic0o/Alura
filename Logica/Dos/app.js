/*
//Paradigma Orientado a Objetos
// Definición de una clase
class Persona {
  constructor(nombre) {
      this.nombre = nombre;
  }

  saludar() {
      alert(`Hola, mi nombre es ${this.nombre}`);
  }
}

// Solicitar el nombre al usuario
const nombreUsuario = prompt("Ingresa tu nombre:");
const persona1 = new Persona(nombreUsuario);
persona1.saludar(); // Salida: Hola, mi nombre es [nombre ingresado]
*/

//Paradigma Procedural
/*
// Definición de una función
function saludar(nombre) {
  alert(`Hola, mi nombre es ${nombre}`);
}

// Solicitar el nombre al usuario
const nombreUsuario = prompt("Ingresa tu nombre:");
saludar(nombreUsuario); // Salida: Hola, mi nombre es [nombre ingresado]
*/

//Paradigma Funcional
// Definición de una función pura
const saludar = (nombre) => `Hola, mi nombre es ${nombre}`;

// Solicitar el nombre al usuario
const nombreUsuario = prompt("Ingresa tu nombre:");
alert(saludar(nombreUsuario)); // Salida: Hola, mi nombre es [nombre ingresado]
