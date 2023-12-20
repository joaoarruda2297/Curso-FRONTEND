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
const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('h2 span'),
    buttonClose: document.querySelector('.close'),

    open(){
        Modal.wrapper.classList.add('open');
    },
    close(){
        Modal.wrapper.classList.remove('open');
    }
}

Modal.buttonClose.onclick = function() {
    Modal.close();
};
form.onsubmit = function(e) {
    e.preventDefault();
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    let imc = IMC(weight, height);

    if(imc != 'NaN' && imc != 'Infinity') {
        Modal.message.innerText = `Seu IMC é ${imc}`;
    }
    else{
        Modal.message.innerText = "Digite valores válidos!";
    }

    Modal.open();
}

function IMC(weight, height) {
    height = height/100;
    return (weight / (height * height)).toFixed(2);
}
