/*
El objetivo propuesto: Traer todos los button del html, recorrer la coleccion y a cada objeto
extraerlo en una nueva variable para guardar su propiedad. Luego realizar la accion.
Cuando suceda la accion opuesta recargar con la propiedad que tenia
*/

/**
 * @param {string} p_selector recibe la etiqueta HTML
 * @param {string} p_texto recibe el texto para unir al selector
 */
function addTextToSelector(p_selector, p_texto) {
  try {
    let selector = document.querySelector(p_selector);
    selector.innerHTML = p_texto;
    if (selector.style.color === "rgb(238, 243, 52)") {
      selector.style.color = "rgb(148, 253, 36)";
    } else if (selector.style.color === "rgb(148, 253, 36)") {
      selector.style.color = "rgb(96, 246, 221)";
    } else {
      selector.style.color = "rgb(238, 243, 52)";
    }
  } catch (error) {
    console.error("Error al agregar texto a selector: ", error);
  }
}

function colorTabla(){
  let tab = document.getElementById("tabla");
  tab.style.color = 'rgb(250, 153, 101)';  
}

addTextToSelector("h1", "¡Elige una función!");

let boton = document.querySelectorAll("button");
boton.forEach((boton) => {
  let colorOriginal = boton.style.backgroundColor;
  boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "#EEF334";
  });
  boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = colorOriginal;
  });
});

/* parte del desafío 2*/
function clickSaludo() {
  let saludo = `"¡Hola, mundo!"`;
  console.log(saludo);
  alert(saludo);
}

function clickSaludame() {
  let nombre = prompt("Ingresa tu nombre: ");
  if (nombre === null) {
    nombre = "Sin Nombre ¬¬";
  }
  let saludo = `"!Hola, ${nombre}!"`;
  console.log(saludo);
  alert(saludo);
  addTextToSelector("h1", `Presiona los botones verdes ${nombre}!`);
}

function clickDuplicar() {
  let numero = prompt("Ingrese un número: ").replace(",", ".");
  if (isNaN(numero)) {
    alert("Debes ingresar un numero");
  } else {
    alert(`El numero es: ${numero * 2}`);
    addTextToSelector("h1", "¡Bien hecho, prueba otra función!");
    addTextToSelector("h3", "Sigue apretando botones para cambiar los colores");
  }
}

function clickPromedio() {
  let num1 = parseFloat(prompt("Ingresa un número: ").replace(",", "."));
  let num2 = parseFloat(prompt("Ingresa otro número: ").replace(",", "."));
  let num3 = parseFloat(prompt("Ingresa el último número").replace(",", "."));
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingrese sólo números");
  } else {
    alert(`El promedio es: ${(num1 + num2 + num3) / 3}`);
    addTextToSelector("h1", "¡Bien hecho, prueba otra función!");
    addTextToSelector("h3", "Prueba los botones verdes -.-");
  }
}

function clickMayor() {
  let num1 = parseFloat(prompt("Ingresa un número: ").replace(",", "."));
  let num2 = parseFloat(prompt("Ingresa otro número: ").replace(",", "."));
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese sólo números");
  } else {
    alert(`El número mayor es: ${Math.max(num1, num2)}`);
    addTextToSelector("h1", "¡Bien hecho, prueba otra función!");
    addTextToSelector("h3", "Otra mas, otra mas");
  }
}

function clickCuadrado() {
  let numero = parseFloat(prompt("Ingresa un número: ").replace(",", "."));
  if (isNaN(numero)) {
    alert("Debes ingresar un número");
  } else {
    alert(`El cuadrado es: ${numero * numero}`);
    addTextToSelector("h1", "¡Bien hecho, prueba otra función!");
    addTextToSelector("h3", "Excelente :)");
  }
}

/* Parte del desafío 3 */
function calculaIMC(p_peso, p_altura) {
  return p_peso / (p_altura * p_altura);
}

function clasificaIMC(p_imc) {
  let doc = "Debes visitar a un doctor";
  switch (true) {
    case p_imc <= 18.5:
      return `bajo peso. ${doc}`;
    case p_imc > 18.5 && p_imc <= 24.9:
      return `peso normal.`;
    case p_imc > 24.9 && p_imc <= 29.9:
      return `sobrepeso ${doc}`;
    case p_imc > 29.9 && p_imc <= 34.9:
      return `obesidad grado 1. ${doc}`;
    case p_imc > 34.9 && p_imc <= 39.9:
      return `obesidad grado 2. ${doc}`;
    case p_imc > 39.9:
      return `obesidad grado 3. ${doc}`;
    default:
      break;
  }
}

function calculaFactorial(p_n) {
  let factorial = 1; //por definición de función factorial
  for (let i = 1; i <= p_n; i++) {
    factorial *= i;
  }
  return factorial;
}

function convertirADolar(p_peso) {
  return p_peso * 0.00095;
}

function calculaArea_R(p_base, p_altura) {
  return p_base * p_altura;
}

function calculaPerímetro_R(p_base, p_altura) {
  return 2 * (p_base + p_altura);
}

function calculaArea_C(p_radio) {
  return 3.14 * (p_radio * p_radio);
}

function calculaPerímetro_C(p_radio) {
  return 2 * 3.14 * p_radio;
}

function calcularTabla(p_multiplicando){
  let resultado = '';
   for(i=0; i<=10; i++){
     resultado += ` ${p_multiplicando} x ${i} = ${i*p_multiplicando} <br>`   
   };
   return resultado;
 }

function clickIMC() {
  let peso = parseFloat(
    prompt("Ingresa tu peso en kg: (ejemplo: 80.500) ").replace(",", ".")
  );
  let altura = parseFloat(
    prompt("Ingresa tu altura en metros, (ejemplo: 1.80): ").replace(",", ".")
  );
  if (isNaN(peso) || isNaN(altura)) {
    alert("Por favor, ingresa los valores solicitados");
  } else {
    let imc = calculaIMC(peso, altura);
    alert(`Tu IMC es: ${imc}. Tienes ${clasificaIMC(imc)}`);
    addTextToSelector("h1", "¡Excelente, prueba otra función!");
    addTextToSelector("h3", "Prueba todas las funciones :)");
  }
}

function clickFactorial() {
  let n = parseInt(prompt("Ingresa un número para calcular su factorial: "));
  if (isNaN(n)) {
    alert("Por favor, ingresa un número natural");
  } else {
    alert(`El factorial del numero ${n} es ${calculaFactorial(n)}`);
    addTextToSelector("h1", "¡Excelente, prueba otra función!");
    addTextToSelector("h3", "Más despacio Stirling, no te vayas al infinito");
  }
}

function clickDolar() {
  let pesos = parseFloat(
    prompt(
      "Ingresa la cantidad de pesos (ARS) que deseas convertir: (ejemplo: 500.45)"
    )
  );
  if (isNaN(pesos)) {
    alert("Por favor, ingresa un valor numérico");
  } else {
    alert(
      `Ingresaste ${pesos}. Dolares que recibes: ${convertirADolar(pesos)}`
    );
    addTextToSelector("h1", "¡Excelente, prueba otra función!");
    addTextToSelector("h3", "Precio del dolar al día 31/01/2025");
  }
}

function clickArea_R() {
  let base = parseFloat(
    prompt("Ingresa la anchura en metros de tu pared: (ejemplo: 1.50)")
  );
  let altura = parseFloat(prompt("Ingresa la altura: (ejemplo: 2.50)"));
  if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, ingresa los valores solicitados");
  } else {
    alert(
      `El área de tu pared es: ${calculaArea_R(
        base,
        altura
      )} y el perímetro es: ${calculaPerímetro_R(base, altura)}`
    );
    addTextToSelector("h1", "¡Bien ahí arquitecto!");
    addTextToSelector("h3", "Ahora prueba el círculo");
  }
}
function clickArea_C() {
  let radio = parseFloat(
    prompt("Ingresa el radio de tu círculo: (ejemplo: 2.1)")
  );
  if (isNaN(radio)) {
    alert("Por favor, ingresa un valor numérico");
  } else {
    alert(`El área de tu círculo es: ${calculaArea_C(radio)}`);
    addTextToSelector("h1", "¡Excelente, prueba otra función!");
    addTextToSelector("h3", "Sigamos, sigamos");
  }
}

function clickTabla() {
  let tabla = document.getElementById("tabla");
  let multiplicando = parseInt(prompt('Ingrese un numero entero entre 0 y 10: '));
  if(isNaN(multiplicando) || multiplicando < 0 || multiplicando > 10){
    alert('Debes ingresar un numero entero entre 0 y 10');
  }else{
      tabla.innerHTML = calcularTabla(multiplicando);
      addTextToSelector("h1", `¡Excelente, prueba otra función!`);
      addTextToSelector("h3", "Intenta con otro número");
      colorTabla();
  }
}
/* parte del desafio 1*/
function clickConsola() {
  alert("El botón fue clickado");
}

function clickPrompt() {
  let ciudad = prompt("Escribe una ciudad de Brasil: ");
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickAlert() {
  alert("Yo amo JavaScript, (pero también Java :p)");
}

function clickSuma() {
  let num1 = parseFloat(prompt("Ingresa un numero: ").replace(",", "."));
  let num2 = parseFloat(prompt("Ingresa otro numero: ").replace(",", "."));
  let suma = num1 + num2;
  if (isNaN(suma)) {
    alert("Debe ingresar solo numeros");
  } else {
    alert(`La suma de ${num1} y ${num2} es ${suma}`);
    addTextToSelector("h1", "¡Bien hecho, prueba otra función!");
    addTextToSelector("h3", "Sigue apretando botones para cambiar los colores");
  }
}


