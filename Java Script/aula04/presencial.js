//Crie um programa que peça 5 nomes ao usuario 
//Armazene esses nomes em um array
//Mostre o ultimo nome
//Remova o primeiro nome
//Peça um nome e substitua o nome de indice 3



const listaNome = []

for (let x=0; x<5; x++){
    const nome = prompt(`Digite o nome numero ${x+1} :`)
    
    listaNome.push(nome)
}

console.log(listaNome)

console.log(listaNome.at(-1))

listaNome.shift()

listaNome[3] = prompt("Digite um novo nome: ")


console.log(listaNome)


