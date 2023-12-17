//declaração de tipos
let chama = "Qualquer coisa"
chama = 2
chama = 3.5

//constande nao pode ser mudada
const c = 2
const d = "chama"

//funcoes
let x = "olá"
function digaOla(x)
{
    return x
}

//objeto
const celular = {
    cor: "preto",
    numero: 11973060511,
    ligar: function() {
        alert("ligando")
    }
}

//acessando o objeto
console.log(celular.cor, celular.numero)

//interpolação de valores, precisa usar a crase
console.log(`esse aqui é um teste para mostrar o valor de c: ${c}`)

//funcoes

function funcaoQualquer()
{
    console.log("ce sabia que o sabiá sabia assobiar?")
}

//funcao anonimas
let sum = function(number1, number2)
{
    total = number1 + number2
    return total
}


sum(2,3)

let nome1 = "Mayk"
let names = ["João", "Pedro" , "Ana"]

for(let char of nome1)
{
    console.log(char)
}

for(let nome1 of names)
{
    console.log(names)
}

let person =
{
    nome: "joao",
    cel: 11973060511
}

for(let propriedade in person)
{
    console.log(propriedade)
}