let holaMundo = alert("Bienvenido al jueguito!");
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroSecreto}`);
}else{
    alert('El número secreto era ' + numeroSecreto);
    alert('No acertaste el numero');
};
console.log(numeroUsuario);
console.log(numeroSecreto == numeroUsuario);
console.log(alert);
console.log(holaMundo);
