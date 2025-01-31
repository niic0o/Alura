
let max = 10;
let intentos = 0;
let numeroSecreto = 0;

function configIniciales(){
  addTextToSelector("h1", "Adivina el número secreto");
  addTextToSelector("p", `El número secreto está entre 1 y ${max}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

configIniciales();
/*hoisting en accion*/
/**
 * @param {string} p_selector recibe la etiqueta HTML
 * @param {string} p_texto recibe el texto para unir al selector
 */
function addTextToSelector(p_selector, p_texto) {
  try {
    let selector = document.querySelector(p_selector);
    selector.innerHTML = p_texto;
  } catch (error) {
    console.error("Error al agregar texto a selector: ", error);
  }
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * max) + 1;
}

/**
 * Reinicia los botones dejando uno activado y el otro desactivado
 */
function reiniciarBotones(){
  let b_intentar = document.getElementById('intentar');
  let b_reiniciar = document.getElementById('reiniciar');
  if(b_intentar.getAttribute('disabled') === null){
    b_intentar.setAttribute('disabled', 'true');
    b_reiniciar.removeAttribute('disabled');
  }else{
    b_intentar.removeAttribute('disabled');
    b_reiniciar.setAttribute('disabled', 'true');
  }
}
/**
 * Esta funcion es activada desde el evento onclick en HTML
 * Controla que sea numero el ingreso de dato
 * Compara con el numero secreto y configura los mensajes de acuerdo el suceso ocurrido
 */
function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (isNaN(numeroUsuario)) {
    alert("¡Debes ingresar un número!");
    limpiarCaja();
    return;
  } else {
    if (numeroUsuario === numeroSecreto) {
      addTextToSelector(
        "p",
        `¡Felicidades! Has acertado el número secreto en ${intentos} ${
          intentos === 1 ? "intento" : "intentos"
        } `
      );      
      reiniciarBotones();
      return;
    } else if (numeroUsuario < numeroSecreto) {
      addTextToSelector(
        "p",
        `El número secreto es mayor que ${numeroUsuario}.`
      );
    } else {
      addTextToSelector(
        "p",
        `El número secreto es menor que ${numeroUsuario}.`
      );
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego(){
  reiniciarBotones();
  limpiarCaja();
  configIniciales();
}