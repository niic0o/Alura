//Pregunta el dia de la semana y saluda al usuario
let dia = prompt("Que dia de la sema es?: ");

if (
  dia === "sabado" ||
  dia === "domingo" ||
  dia === "Domingo" ||
  dia === "sábado" ||
  dia === "Sabado" ||
  dia === "Sábado"
) {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}

//Pregunta por un numero y controla si es positivo o negativo
let numero = prompt("Ingrese un numero: ");
if (numero < 0) {
  alert("El numero es negativo");
} else {
  alert("El numero es positivo");
};

//informar a un usuario el saldo de su cuenta
let saldo = 4500
alert(`El saldo de su cuenta es: ${saldo}`);

//saludar a un usuario especifico
let nombre = prompt("Ingrese su nombre: ");
alert(`Hola ${nombre}, bienvenido`);
