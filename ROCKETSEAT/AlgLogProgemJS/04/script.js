let numRand = (Math.random() * 10).toFixed(0)
let numTeste = Number(prompt("Digita um número aí:"))
let tentativas = 1

//alert(numRand)

while(numTeste != numRand)
{
    numTeste = Number(prompt("Erro, tente outra vez:"))
    tentativas++
}

alert("Parabéns! Você descobriu o número "+ numTeste + " em "+ tentativas + " tentativas.")



