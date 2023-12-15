const patients = [
    {
        nome: "João",
        idade: 25,
        peso: 65,
        altura: 170
    },
    {
        nome: "Márcio",
        idade: 25,
        peso: 70,
        altura: 175
    },
    {
        nome: "Geisa",
        idade: 55,
        peso: 60,
        altura: 160
    }
]

for(let i=0;i<patients.length;i++)
{
    alert(`O paciente ${i+1} se chama ${patients[i].nome}, possui ${patients[i].idade} anos, pesa ${patients[i].peso}kg e possui ${patients[i].altura}cm de altura`)
}