const botao = document.querySelector('#bot2');
botao.addEventListener('mouseover', changePosition);
function changePosition() {
    
    let x = Math.random() * 100;
    let y = Math.random() * 100;

    console.log(x,y);

    if(x > 95){
        botao.style.left = `calc(${x}vw - 100px)`;
    }
    else{
        botao.style.left = `${x}vw`;
    }

    if(y > 95){
        botao.style.top = `calc(${y}vh - 20px)`;
    }
    else{
        botao.style.top = `${y}vh`;
    }
}

const bgAudio = new Audio('./audio.mp3');
const botaoSim = document.querySelector('#bot1');
botaoSim.addEventListener('click', test);
function test(){
    bgAudio.play();
}