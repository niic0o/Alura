addTextToSelector('h1', 'Adivina el número secreto');
let max = 10;
let numeroSecreto = generarNumeroSecreto();
addTextToSelector('p', `El número secreto está entre 1 y ${max}`);

/*hoisting en accion*/
/**
 * @param {string} p_selector recibe la etiqueta HTML
 * @param {string} p_texto recibe el texto para unir al selector
 */
function addTextToSelector(p_selector,p_texto){
    try {
        let selector = document.querySelector(p_selector);
        selector.innerHTML = p_texto;        
    } catch (error) {
        console.error('Error al agregar texto a selector: ', error);        
    }

};

function intentoDeUsuario(){
    alert('Ha presionado sobre el intento');
};

function generarNumeroSecreto(){
    return Math.floor(Math.random() * max) + 1;
};