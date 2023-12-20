//variaveis
const calculate = document.querySelector(".calculate");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");
const modalWrapper = document.querySelector(".modal-wrapper");
const h2 = document.querySelector(".modal-wrapper h2");
const closeWindow = document.querySelector(".close");
const alerta = document.querySelector(".alert");

let contador = 0;
let imc = 0;

//eventos
calculate.addEventListener("click", calcIMC);
closeWindow.addEventListener("click", handleResetClick);
inputWeight.addEventListener("input", showAlert);
inputHeight.addEventListener("input", showAlert);

//funcoes
async function showAlert(event){
    if(Number(event.target.value) != Number && contador == 0){
        contador=1;
        alerta.classList.toggle("open");
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    contador=0;
}

function calcIMC(event){
    imc = Number(inputWeight.value) / (Number(inputHeight.value) * Number(inputHeight.value));
    imc = imc.toFixed(1);

    if(imc > 0 && imc != Infinity)
    {
        h2.innerText = "Seu IMC é " + imc;
    }
    else{
        h2.innerText = "Digite valores válidos";
    }

    toggleModal(event);
}

function toggleModal(event){
    event.preventDefault();
    modalWrapper.classList.toggle("open");
}

function handleResetClick(){
    inputWeight.value = "";
    inputHeight.value = "";
    toggleModal(event);
}