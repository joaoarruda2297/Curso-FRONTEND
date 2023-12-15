let lista = []
let opcao = 0
let i = 0

while(opcao != 3)
{
    opcao = Number(prompt(`
    Olá usuário, digite a opcão desejada: 
    1. Cadastrar novo produto
    2. Mostrar itens cadastrados
    3. Sair do programa`))

    if(opcao == 1)
    {
        lista[i] = prompt("Digite o nome do produto:")
        i++
    }
    else if(opcao == 2)
    {
        if(i==0)
        {
            alert("Não existem itens cadastrados")
        }
        else
        {
            alert(lista)
        }
    }
}