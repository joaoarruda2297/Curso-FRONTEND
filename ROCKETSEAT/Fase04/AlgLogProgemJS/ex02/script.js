const listaAlunos = [
    {
        nome: "João",
        p1: 10,
        p2: 10
    },
    {
        nome: "Diego",
        p1: 8,
        p2: 7.5
    },
    {
        nome: "Rodrigo",
        p1: 5,
        p2: 0
    },
    {
        nome: "Márcio",
        p1: 9,
        p2: 2.2
    }
]

let media

for(let i=0;i<listaAlunos.length;i++)
{
    media = ((listaAlunos[i].p1 + listaAlunos[i].p2)/2).toFixed(2)

    if(media>=7)
    {
        alert(`A média do(a) aluno(a) ${listaAlunos[i].nome} é: ${media}\nParabéns, ${listaAlunos[i].nome}! Você foi aprovado(a) no concurso!`)
    }
    else
    {
        alert(`A média do(a) aluno(a) ${listaAlunos[i].nome} é: ${media}\nNão foi dessa vez, ${listaAlunos[i].nome}! Tente novamente!`)
    }
}