let titulo = document.querySelector('h1');
titulo.innerHTML = 'Adivina el número secreto';

let parrarfo = document.querySelector('p');
let max = 10;

parrarfo.innerHTML = `El número secreto está entre 1 y ${max}`;

function intentoDeUsuario(){
    alert('Ha presionado sobre el intento');
}