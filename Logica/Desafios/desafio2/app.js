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
}

//Juego, consigue 100 puntos o mas aproximandote al menos 100 numeros de distancia del numero secreto
// Genera un número aleatorio entre 1 y 1000
// solo permite que el usuario ingrese numeros del 1 al 1000 para continuar la ejecucion
let nuevoNumero = 0;
do {
  nuevoNumero = Number(prompt("Ingrese un numero entre 1 y 1000: "));
} while (
  isNaN(nuevoNumero) ||
  nuevoNumero > 1000 ||
  nuevoNumero < 1 ||
  typeof nuevoNumero === null
);
let numeroAleatorio = Math.floor(Math.random() * 1000);
let distancia = Math.abs(nuevoNumero - numeroAleatorio);
let puntos = 200 - distancia;
alert(
  `Se acercó por ${distancia} posiciones al numero secreto: ${numeroAleatorio}`
);
alert(`Obtuvo ${puntos} puntos`);
if (puntos < 100) {
  alert("Lo siento, no ha ganado el juego :(");
} else {
  alert("Felicidades, has ganado!");
}
console.log("Nuevo Numero ingresado: " + nuevoNumero);
console.log("Numero Aleatorio: " + numeroAleatorio);
console.log("Distancia: " + distancia);
console.log("Puntos: " + puntos);
