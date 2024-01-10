import {Modal} from './modal.js';
import {ModalError} from './alert-error.js';

//variaveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
//const resultModal = document.querySelector('h2 span');
//const modalCard = document.querySelector('.modal-wrapper');
//const closeBtn = document.querySelector('.close');

/*3 maneiras de criar e atribuir funcao a um evento
form.onsubmit = function () {}
form.onsubmit = () => {}
form.onsubmit = handleSubmit;
function handleSubmit(){}*/

inputWeight.oninput = () => ModalError.close();
inputHeight.oninput = () => ModalError.close();
form.onsubmit = function(e) {
    e.preventDefault();
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    let imc = IMC(weight, height);

    if(imc != 'NaN' && imc != 'Infinity' && imc > 0 ) {
        Modal.message.innerText = `Seu IMC é ${imc}`;
        Modal.open();
    }
    else{
        ModalError.open();
    }

    inputHeight.value = "";
    inputWeight.value = "";
}

function IMC(weight, height) {
    height = height/100;
    return (weight / (height * height)).toFixed(2);
}

