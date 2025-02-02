let listaGenerica = [];
let lenguajesDeProgramacion = [];
let cadena = '';
listaGenerica.push('JavaScript', 'C', 'C++', 'Kotlin', 'Python');
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
function clickLenguajes(){
  document.getElementById("tabla").innerHTML = "";
  lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
  console.log(lenguajesDeProgramacion);
  addTextToSelector("h3", "¡Lenguajes agregados!");
  lenguajesDeProgramacion.forEach(function(elemento) {
    cadena += `${elemento}, `;
  });
  addTextToSelector("p", cadena);
  cadena = '';
 lenguajesDeProgramacion.length = 0;
};


