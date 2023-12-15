let num1 = Number(prompt("Digite o primeiro número:"))
//let num1 = prompt("Digite o primeiro número:")
let num2 = Number(prompt("Digite o segundo número:"))
//let num2 = prompt("Digite o segundo número:")
let sum = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let div = (num1 / num2).toFixed(2)
let restDiv = num1 % num2


alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: "+ sub)
alert("A multiplicação dos dois números é: "+ multi)
alert("A divisão dos dois números é: "+ div)
alert("O resto da divisão dos dois números é: "+ restDiv)
sum % 2 == 0 ? alert("A soma dos dois números é par:" + sum) : alert("A soma dos dois números é ímpar: " + sum)
num1 == num2? alert("Os números inseridos são iguais.") : alert("Os números inseridos são diferentes.")
