let nombre = 'Nico';
console.log(`Hola ${nombre}`);
alert(`Hola ${nombre}`);

let lenguaje = prompt("¿Cuál es el lenguaje de programación que mas te gustas?: ");
console.log(`el lenguaje preferido es ${lenguaje}`);

alert("Presiona Aceptar para continuar");

let valor1 = Math.floor(Math.random() * 1000);
let valor2 = Math.floor(Math.random() * 600);
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es ${resultado}`);
alert(`La suma de ${valor1} y ${valor2} es ${resultado}`);
resultado = valor1 - valor2;
console.log(`La resta de ${valor1} y ${valor2} es ${resultado}`);
alert(`La resta de ${valor1} y ${valor2} es ${resultado}`);

let edad = parseInt(prompt("Ingrese su edad: "));
console.log(`${edad > 17 ? "Usted es mayor de edad." : "Usted es menor de edad."}`);

let numerito = parseInt(prompt("Ingrese un numero entero: "));
alert(`${numerito >= 0 ? "El numero es positivo" : "El numero es negativo"}`);
  // alert es una función que muestra un mensaje en una