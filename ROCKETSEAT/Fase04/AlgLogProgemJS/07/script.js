const patients = [
    {
        nome: "João",
        idade: 25,
        peso: 65,
        altura: 1.70
    },
    {
        nome: "Márcio",
        idade: 25,
        peso: 70,
        altura: 1.75
    },
    {
        nome: "Geisa",
        idade: 55,
        peso: 60,
        altura: 1.60
    }
]

let IMC

for(let i=0;i<patients.length;i++)
{
    IMC = (patients[i].peso / (patients[i].altura ** 2)).toFixed(2)
    alert(`O paciente ${i+1} se chama ${patients[i].nome} e possui ${IMC} de IMC.`)
}
