let titulo = document.querySelector('h1');
titulo.innetHTML = 'Hora del Desafío';

function clickConsola(){
    alert('El botón fue clickado');
};

function clickPrompt(){
    let ciudad = prompt('Escribe una ciudad de Brasil: ');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
};

function clickAlert(){
    alert('Yo amo JS');
};

function clickSuma(){
    let num1 = parseInt(prompt("Ingresa un numero: "));
    let num2 = parseInt(prompt("Ingresa otro numero: "));
    let suma = num1 + num2;
    isNaN(suma) ? alert('Debe ingresar solo numeros') : alert(`La suma de ${num1} y ${num2} es ${suma}`);
};