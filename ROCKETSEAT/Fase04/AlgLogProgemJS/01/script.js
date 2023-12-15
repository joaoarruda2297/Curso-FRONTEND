/* 
Encontre a solução ao problema:
Pergunte o nome do usuário e escreva a mensagem:
"Olá, nome do usuário!"
*/

let nome = prompt("Escreva o seu nome, desgraçado:")
alert("Olá " + nome + ", desgraçado.")

let num1 = Number(prompt("Digite o primeiro número:"))
//let num1 = prompt("Digite o primeiro número:")
let num2 = Number(prompt("Digite o segundo número:"))
//let num2 = prompt("Digite o segundo número:")
let sum = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let div = num1 / num2
let restDiv = num1 % num2

alert("O resultado da soma dos dois números que o desgraçado digitou é: " + sum)
alert("O resultado da subtração dos dois números que o desgraçado "+ nome +" digitou é: "+ sub)
alert("O resultado da multiplicação dos dois números que o desgraçado "+ nome +" digitou é: "+ multi)
alert("O resultado da divisão dos dois números que o desgraçado "+ nome +" digitou é: "+ div)
alert("O resultado do resto dos dois números que o desgraçado "+ nome +" digitou é: "+ restDiv)
