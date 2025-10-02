//const numero1= parseInt(prompt("Digite o primeiro numero: "))
//const numero2= parseInt(prompt("Digite o segundo numero: "))

//Numeros Positivos
// if ((numero1 >= 0) && (numero2 >= 0)){
//     alert("Os dois numeros são positivos");
// }else if ((numero1 >= 0) || (numero2 >= 0)){
//     alert("Pelo menos um dos numeros é positivo");
// }else{
//     alert("Os dois numeros são negativos");
// }

//Igualdade de numeros e qual é o maior
// if (numero1 !== numero2){
//     console.log(`Os numeros ${numero1} e ${numero2} são diferentes`)
// }
// if (numero1 === numero2){
//     console.log(`Os numeros ${numero1} e ${numero2} são iguais`)
// } else if (numero1 > numero2){
//     console.log(`O primeiro numero ${numero1} é maior que o segundo numero ${numero2}` )
// }else {
//     console.log(`O segundo numero ${numero2} é maior que o primeiro numero ${numero1}` )
// }

//Positivo, negativo ou zero

// const num = parseInt(prompt("Digite um numero: "))
// if (num === 0){
//     console.log('Numero digitado igual a ZERO')
// }else if (num >0){
//     console.log('Numero digitado é positivo')
// }else 
// console.log('Numero digitado é negativo')


// do...While (Positvo e Negativo)

// let numero = 0;
// do {
//  numero = parseInt(prompt("Digite um numero positivo"))
// }while (numero>=0)

// alert("Numero negativo digitado")


//While(repetição)
// let num = 1;
// while (num < 6){
//     console.log(num)
//     num = num+1
// } 

//For com quadrado do numero

// let num = 1;
// for (num=1;num <=10;num++){
// console.log(`Numero: ${num} elevado ao quadrado: ${num**2}` )
// }
    
// while (num <=10 ){
//     console.log(`Numero: ${num} elevado ao quadrado: ${num**2}` )
//     num = num+1
// } 

// //Palavra com for..of

// const palavra = prompt("Digite uma palvra")

// for(const caracter of palavra){
//     console.log(caracter)
// }


// Atividade 08:

// Primeiro, crie um array chamado cores contendo os seguintes elementos:
// Vermelho, Verde, Azul, Amarelo.
// Em seguida, acesse e exiba no console o elemento na posição 3.

// Objetivo:
// Praticar o uso de índices para acessar elementos específicos em um array.

// const cores = ["Vermelho", "Verde", "Azul", "Amarelo"]
//     console.log(cores[3])



// Crie um array chamado animais contendo os seguintes elementos:
// Cachorro, Gato, Papagaio. Em seguida:Adicione o elemento Tartaruga ao final do array.
// Remova o primeiro elemento e adicione o elemento Coelho no início.
// Depois, substitua o elemento na posição 2 por Hamster.
// Exiba o comprimento atual do array.
// Acesse e exiba no console o elemento na posição 1.
// Finalmente, exiba o array final no console.

const animais = ["Cachorro", "Gato", "Papagaio"]

animais.push("Tartaruga")
animais.shift()
animais.unshift("Coelho")
animais[2] = "Hamster"
console.log(animais.length)
console.log(animais[1])

console.log(animais)

