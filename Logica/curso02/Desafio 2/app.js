let listaGenerica = [];
let lenguajesDeProgramacion = [];
let cadena = "";
let sumandos = [];
let intentos = 0;
let maxIntentos = 6;
listaGenerica.push("JavaScript", "C", "C++", "Kotlin", "Python");
addTextToSelector("h1", "¡Presiona los botones!");

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

/**
 * Muestra en pantalla manipulando el DOM el contenido del arreglo concatenado
 * @param {Array} p_arreglo recibe un arreglo de elementos
 */
function mostrarArreglo(p_arreglo) {
  document.getElementById("tabla").innerHTML = "";
  p_arreglo.forEach(function (elemento) {
    cadena += `${elemento}, `;
  });
  addTextToSelector("p", cadena);
  cadena = "";
  p_arreglo.length = 0;
}

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

/* parte del desafío 4*/
function clickLenguajes() {
  lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");
  mostrarArreglo(lenguajesDeProgramacion);
  addTextToSelector("h3", "¡Lenguajes agregados!");
  addTextToSelector("h1", "¡Presiona los botones!");
}

function clickInverso() {
  lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");
  let reverso = lenguajesDeProgramacion.reverse();
  mostrarArreglo(reverso);
  addTextToSelector("h3", "¡El arreglo se invirtió satisfactoriamente!");
  addTextToSelector("h1", "¡Presiona los botones!");
}

function clickPromedio() {
  intentos++;
  let random = Math.floor(Math.random() * 20) + 1;
  sumandos.push(
    random,
    random + 5,
    random * 2,
    random * 3,
    random * 4,
    random * 5
  );
  alert(`Los números ingresados son: ${sumandos}.`);
  let valorInicial = 0;
  let sumatoria = sumandos.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    valorInicial
  );
  let promedio = sumatoria / sumandos.length;
  addTextToSelector(
    "p",
    `El promedio es: ${promedio}.<br>La sumatoria fué: ${sumatoria}.<br>El conjunto de datos: ${sumandos} `
  );
  addTextToSelector("h3", "Presiona promedio otra vez :)");
  if (intentos === maxIntentos) {
    sumatoria = 0;
    sumandos.length = 0;
    intentos = 0;
  }
}

function clickMayorMenor() {
  let random = Math.floor(Math.random() * 20) + 1;
  let random2 = Math.floor(Math.random() * 10) + 1;
  let random3 = Math.floor(Math.random() * 5) + 1;
  let numeros = [];
  numeros.push(random, random2, random3);
  alert(`Los números ingresados son: ${numeros}.`);
  let valorMayor = Math.max(...numeros);
  let valorMenor = Math.min(...numeros);
  addTextToSelector(
    "p",
    `El valor mayor es: ${valorMayor}.<br> El valor menor es ${valorMenor}`
  );
  addTextToSelector("h1", "¡Sigue probando!");
  addTextToSelector("h3", "Secreto :p se usó Math.max(...array)");
}

function clickBuscar() {
  let num = parseInt(
    prompt(
      "Ingrese un numero para saber en que posición se utilizó al cálcular 'promedio': "
    )
  );
  if (isNaN(num)) {
    alert("¡Error! Ingrese un número.");
  } else {
    let indice = sumandos.indexOf(num);
    if (indice != -1) {
      addTextToSelector(
        "p",
        `El número ${num} se utilizó en la posición ${indice} al calcular el promedio`
      );
    } else {
      addTextToSelector(
        "p",
        `El número ${num} no se utilizó al calcular el promedio. (indice ${indice})`
      );
    }
    addTextToSelector("h1", "¡Sigue probando!");
    addTextToSelector("h3", "Presiona 'Promedio'");
  }
}
