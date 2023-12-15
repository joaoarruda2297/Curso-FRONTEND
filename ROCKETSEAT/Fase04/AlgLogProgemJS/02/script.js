let nome = prompt("Digita seu nome aí fdp:")
let p1 = Number(prompt("Solta aí a nota da p1:"))
let p2 = Number(prompt("Solta aí a nota da p2:"))
let p3 = Number(prompt("Solta aí a nota da p3:"))

let media = ((p1 + p2 + p3)/3).toFixed(2)

if(media >= 5)
{
    alert("Parabéns "+ nome +", você passou nessa caceta. Sua média foi de: " + media)
}
else
{
    alert("Parabéns "+ nome +", você é burro pra caralho. Você não passou dessa vez, na próxima fume menos maconha. Sua média foi de: " + media)
}