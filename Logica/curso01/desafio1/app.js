let holaMundo = alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = alert("¡Error! Completa todos los campos!");
alert(
    "nombre actual: " + nombre + 
    "\n edad: " + edad + 
    "\n numero de ventas: " + numeroDeVentas + 
    "\n saldo disponible: " + saldoDisponible
);
nombre = prompt("Ingrese le nombre de usuario:");
edad = prompt("Ingrese la edad:");
if (edad >= 18) {
  alert("¡Puedes obtener tu licencia de conducir!");
} else {
  alert("¡Eres menor de edad. No puedes obtener tu licencia de conducir!");
};
