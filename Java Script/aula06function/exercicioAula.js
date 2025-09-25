function verificarPar(num) {
    // const num = parseInt(prompt("Digite um número: "));
    if (num % 2 === 0) {
        return "O numero é par!!"
    } else {
        return "O numero é impar!!"
    }
    
}
// const parImpar = verificarPar(10)
const parImpar = verificarPar(prompt("Digite um número: "))
alert(parImpar)

// function gerarNumeroAleatorio(valor){
//     const numeros = Math.round(Math.random() * valor)
//     alert(numeros)   
// }

// const intervaloNumero = parseInt(prompt("Digite o valor do intervalo: "))

// gerarNumeroAleatorio(intervaloNumero)