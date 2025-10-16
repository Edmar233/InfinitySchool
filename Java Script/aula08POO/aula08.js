// const pessoa = ["Davi", "Rua tal", "11122233344"]
// const pessoa = {
//     nome: "Davi",
//     endereco: "Rua tal",
//     cpf: "11122233344"
// }
// const pessoa2 = {
//     nome: "Joao",
//     endereco: "Rua dos bobos",
//     cpf: "11122233345"
// }

//Crie um programa que peça 
    // Titulo , quandidade de paginas, autor e genero de um livro

//utilize um objeto literal para armazenar essas informações 
//exiba em tela o titulo do livro e altere o autor para NOT

const livro = {
    titulo: prompt("Digite o titulo"),
    quantidadeDePaginas: parseInt(prompt("Digite a quantidade de paginas")),
    autor: prompt("Digite o autor"),
    genero: prompt("Digite o genero")
}

alert(livro.titulo)
alert(livro.autor)

livro.autor = "Not"

alert(livro.autor)