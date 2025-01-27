let holaMundo = alert("Bienvenido al jueguito!");
let numeroSecreto = 8;
let numeroUsuario = 0;
let intentos = 0;
let palabraIntento = "vez";

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
    intentos++;
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroSecreto}`);
        if(intentos == 1){
            alert(`Acertaste en ${intentos} ${palabraIntento}`);
        }else{
            palabraIntento = "veces";
            alert(`Acertaste en ${intentos} ${palabraIntento}`);
        };
    }else{
        alert('No acertaste el numero');
        if(numeroUsuario < numeroSecreto){
            alert('El numero secreto es mayor!');
        }else{
            alert('El numero secreto es menor!');
        };
    };
};
