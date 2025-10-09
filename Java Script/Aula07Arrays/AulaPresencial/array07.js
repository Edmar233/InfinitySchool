// const numeros = [1,2,0,3,4,5,0]

// numeros.forEach((numero , posicao) =>{
//     //console.log(`O numero na posição ${posicao} é : ${numero}`)
//     if (numero > 0 ){
//         console.log(`O Numero ${numero} na posição ${posicao} é positivo`)
//     } else if(numero < 0){
//         console.log(`O Numero ${numero} na posição ${posicao} é negativo`)
//     }else {
//         console.log(`O Numero ${numero} na posição ${posicao} é ZERO`)
//     }
// })

function contVogais (texto) {
    texto = texto.toLowerCase()
    const vogais = "aeiou"
    let contador = 0;
    for (const caracter of texto ){
        if (vogais.includes(caracter)){
            contador ++;
        }
    }
    return contador;
}
texto = prompt("Digite uma frase: ")

console.log(contVogais(texto));