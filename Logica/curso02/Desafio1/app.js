/*
El objetivo propuesto: Traer todos los button del html, recorrer la coleccion y a cada objeto
extraerlo en una nueva variable para guardar su propiedad. Luego realizar la accion.
Cuando suceda la accion opuesta recargar con la propiedad que tenia
*/

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";
titulo.style.color = "#EEF334";

let boton = document.querySelectorAll("button");
boton.forEach((boton) => {
  let colorOriginal = (boton.style.backgroundColor = "#43BCD3");
  boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "#EEF334";
  });
  boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = colorOriginal;
  });
});


function clickConsola() {
  alert("El botón fue clickado");
}

function clickPrompt() {
  let ciudad = prompt("Escribe una ciudad de Brasil: ");
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickAlert() {
  alert("Yo amo JS");
}

function clickSuma() {
  let num1 = parseInt(prompt("Ingresa un numero: "));
  let num2 = parseInt(prompt("Ingresa otro numero: "));
  let suma = num1 + num2;
  isNaN(suma)
    ? alert("Debe ingresar solo numeros")
    : alert(`La suma de ${num1} y ${num2} es ${suma}`);
}
