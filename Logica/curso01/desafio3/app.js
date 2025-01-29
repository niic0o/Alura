let contador_1 = 1;

while (contador_1 < 11) {
  alert(contador_1);
  contador_1++;
}

let contador_2 = 10;
while (contador_2 >= 0) {
  alert(contador_2);
  contador_2--;
}

// Solicita un numero al usuario y cuenta desde 0 hasta ese numero mostrando por consola
let inicio_1 = 0;
let corte_1 = 0;
do {
  corte_1 = Number(prompt("Ingrese un numero entre 0 y 50: "));
} while (
  isNaN(corte_1) ||
  corte_1 < 0 ||
  corte_1 > 50 ||
  typeof corte_1 === null
);
while (inicio_1 <= corte_1){
  console.log(inicio_1);
  inicio_1++;
}
console.log(inicio_1 + 'fin');
alert(`El conteo se realizó por consola con éxito`);

// Solicita un numero al usuario y cuenta desde ese numero hasta 0 mostrando por consola
let fin_1 = 0;
let comienzo_1 = 0;
do {
  comienzo_1 = Number(prompt("Ingrese un numero entre 0 y 50: "));
} while (
  isNaN(comienzo_1) ||
  comienzo_1 < 0 ||
  comienzo_1 > 50 ||
  typeof comienzo_1 === null
);
while (comienzo_1 >= fin_1){
  console.log(comienzo_1);
  comienzo_1--;
}
console.log(comienzo_1 + 'fin');
alert(`El conteo se realizó por consola con éxito`);

