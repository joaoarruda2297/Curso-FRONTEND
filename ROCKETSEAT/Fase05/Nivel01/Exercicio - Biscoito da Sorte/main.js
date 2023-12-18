//Variaveis
let sorte = ["A vida trará coisas boas se tiveres paciência.", "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.", "Não compense na ira o que lhe falta na razão.", "Defeitos e virtudes são apenas dois lados da mesma moeda.", "A maior de todas as torres começa no solo.", "Não há que ser forte. Há que ser flexível.", "Gente todo dia arruma os cabelos, por que não o coração?", "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.", "A juventude não é uma época da vida, é um estado de espírito.", "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.", "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.", "Siga os bons e aprenda com eles.", "Não importa o tamanho da montanha, ela não pode tapar o sol.", "O bom-senso vai mais longe do que muito conhecimento.", "Quem quer colher rosas deve suportar os espinhos."];
let cont = 0;
const btnSorte = document.querySelector("#biscoito");
const frase = document.querySelector("p");
const btnReset = document.querySelector("button");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

//eventos
btnSorte.addEventListener("click", handleClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function(e){
    if(e.key == "Enter" && screen2.classList.contains("hide")){
        handleClick(e);
    }
    else if(e.key == "Enter" && screen1.classList.contains("hide")){
        handleResetClick(e);
    }
});

function handleClick(event){
    toggleScreen();
    frase.innerText = sorte[cont];
}

function handleResetClick(){
    toggleScreen();
    if(cont == sorte.length - 1){
        cont = 0;
    }
    else
    {
        cont++;
    }
    
}
function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
