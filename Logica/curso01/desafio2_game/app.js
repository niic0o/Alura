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
};
