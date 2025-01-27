let holaMundo = alert("Bienvenido al jueguito!");
// math.random genera numeros que pertenecen al intervalo [0,1)
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 0;
//let palabraIntento = "vez";
let maximoIntentos = 3;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));
  intentos++;
  if (numeroUsuario == numeroSecreto) {
    // {condicion} ? si es true [hace esto] : si es false [hace esto]
    alert(
      `Acertaste, el numero es: ${numeroSecreto}. Lo lograste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    alert("No acertaste el numero");
    if (numeroUsuario < numeroSecreto) {
      alert("El numero secreto es mayor!");
    } else {
      alert("El numero secreto es menor!");
    }
  }
  if (intentos == maximoIntentos) {
    alert(
      `Has agotado tus ${maximoIntentos} intentos, el numero secreto era: ${numeroSecreto}`
    );
    break;
  }
}
