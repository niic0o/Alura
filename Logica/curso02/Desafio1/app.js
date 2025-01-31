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
  let colorOriginal = boton.style.backgroundColor;
  boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "#EEF334";
  });
  boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = colorOriginal;
  });
});

/* parte del desafio 1*/
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

/* parte del desafío 2*/
function clickSaludo() {
  let saludo = `"¡Hola, mundo!"`;
  console.log(saludo);
  alert(saludo);
}

function clickSaludame() {
  let nombre = prompt("Ingresa tu nombre: ");
  let saludo = `"!Hola, ${nombre}!"`;
  console.log(saludo);
  alert(saludo);
}

function clickDuplicar() {
  let numero = parseInt(prompt("Ingrese un numero: "));
  if (isNaN(numero)) {
    alert("Debes ingresar un numero");
  } else {
    alert(`El numero es: ${numero * 2}`);
  }
}

function clickPromedio() {
  let num1 = parseInt(prompt("Ingresa un número: "));
  let num2 = parseInt(prompt("Ingresa otro número: "));
  let num3 = parseInt(prompt("Ingresa el último número"));
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingrese sólo números");
  } else {
    alert(`El promedio es: ${(num1 + num2 + num3) / 3}`);
  }
}

function clickMayor() {
  let num1 = parseInt(prompt("Ingresa un número: "));
  let num2 = parseInt(prompt("Ingresa otro número: "));
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese sólo números");
  } else {
    alert(`El número mayor es: ${Math.max(num1, num2)}`);
  }
}

function clickCuadrado() {
  let numero = parseInt(prompt("Ingresa un número: "));
  if (isNaN(numero)) {
    alert("Debes ingresar un número");
  } else {
    alert(`El cuadrado es: ${numero * numero}`);
  }
}
