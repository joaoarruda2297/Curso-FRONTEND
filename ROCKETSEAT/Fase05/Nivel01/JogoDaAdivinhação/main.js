//variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const inputElement = document.querySelector("#inputNum");
let numRand = (Math.random() * 10).toFixed(0)
let tentativas = 1;

console.log(numRand);

//eventos
btnTry.addEventListener("click", handleClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function(e){
    if(e.key == "Enter" && screen2.classList.contains("hide")){
        handleClick(e);
    }
    else if(e.key == "Enter" && screen1.classList.contains("hide")){
        handleResetClick(e);
    }
});
inputElement.addEventListener("input", function(e){
    if(Number(e.target.value) > 10 || Number(e.target.value) < 0){
        alert("Digite um número entre 0 e 10")
    }
});

function handleClick(event) {
    event.preventDefault();//nao faca padrão
    const inputNumber = document.querySelector("#inputNum");

    if (Number(inputNumber.value) == numRand) {
        screen2.querySelector("h1").innerText = `Acertou em ${tentativas} tentativas!`;
        
        toggleScreen();
    }

    tentativas++;

    inputNumber.value = "";
}

function handleResetClick(){
    tentativas = 1;
    numRand = (Math.random() * 10).toFixed(0);

    toggleScreen();
}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

