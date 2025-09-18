
// CRIE UM PROGRAMA QUE EXIBA UM MENU NO ALERTA PARA USUÁRIO COM AS SEGUINTES OPÇÕES:
// 	- Adicionar nome
// 	- Remover nome
// 	- Editar nome
// 	- Buscar nome
// 	- Parar

const listaNomes = [];


while (opcao != 6){

    const opcao = parseInt(prompt(`\
    *******MENU*******  
    1 -Adicionar Nome 
	2 - Remover Nome
	3 - Editar Nome 
	4 - Listar  Nome 
    5 - Buscar Nome
	6 - Parar 
    Informe a Opção desejada : `
    ))

    
    switch (opcao) {
        case "1":
            const adicionar = prompt("Digite um nome: ") // Código a ser executado se expressao == valor "1"
            if (listaNomes.includes(adicionar)){
                alert(`O nome "${adicionar}" já existe na lista!!`)
                continue    
            }
            listaNomes.push(adicionar)
            alert(listaNomes)
            break // Interrompe a execução do switch

        case "2":
            const remover = prompt("Digite o nome a ser removido : ")
            const indice = listaNomes.indexOf(remover)
            if (indice <0) {
                alert(`O nome "${remover}" não existe na lista!`)
                continue
            }
            listaNomes.splice(indice, 1)
            alert(listaNomes)// Código a ser executado se expressao == valor2
            break

        case "3":
            const editar = prompt("Digite o nome a ser editado: ")
            const novoNome = prompt("Digite o novo nome :") 
            const edita = listaNomes.indexOf(editar)
            listaNomes.splice(edita, 1, novoNome)
            alert(listaNomes)// Código a ser executado se expressao == valor2
            break;

        case "4":
            if (!listaNomes.length) {
                alert(`A lista esta vazia!`)
                continue
            }
            const textoASerImprimido = listaNomes.join("\n")
            alert(textoASerImprimido)

        case "5" :
            const nomeASerBuscado = prompt("Digite o nome a ser buscado :")
            
            if (!listaNomes.includes(nomeASerBuscado)){
                alert(`O nome "${nomeASerBuscado}" não existe na lista!!`)
                continue    
            }


        case "6":
            alert("Saindo...")
            break

     default:
    // Código a ser executado se nenhum dos cases corresponder
        alert("Opção inválida!")
    }   
}
   

