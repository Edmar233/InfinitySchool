let numero1 = parseInt(prompt("Digite um numero: "))
let numero2 = parseInt(prompt("Digite outro numero: "))


console.log(`A soma entre os numeros ${numero1} e ${numero2} é : ${numero1 + numero2}`)
console.log(`A subtração entre os numeros ${numero1} e ${numero2} é : ${numero1 - numero2}`)
console.log(`A multiplicação entre os numeros ${numero1} e ${numero2} é : ${numero1 * numero2}`)
console.log(`A divisão entre os numeros ${numero1} e ${numero2} é : ${numero1 / numero2}`)
console.log(`O resto da divisão entre os numeros ${numero1} e ${numero2} é : ${numero1 % numero2}`)
console.log("")

console.log("Resultado com Atribuição \n")
console.log("")
// Atribuição Adição
let soma = numero1;
soma += numero2;
console.log(`A soma entre os numeros ${numero1} e ${numero2} é : ${soma}`)

// Atribuição Subtração
let subtracao = numero1;
subtracao -= numero2;
console.log(`A subtração entre os numeros ${numero1} e ${numero2} é : ${subtracao}`)

// Atribuição Multiplicação
let multiplicacao = numero1;
multiplicacao *= numero2;
console.log(`A multiplicação entre os numeros ${numero1} e ${numero2} é : ${multiplicacao}`)

// Atribuição Divisão
let divisao = numero1;
divisao /= numero2;
console.log(`A divisão entre os numeros ${numero1} e ${numero2} é : ${divisao}`)

// Atribuição Resto
let resto = numero1;
resto %= numero2;
console.log(`O resto da divisão entre os numeros ${numero1} e ${numero2} é : ${resto}`)


// Realize as operações aritméticas básicas (adição, subtração, multiplicação, divisão e resto) e exiba os resultados.
// Utilize operadores de atribuição (como +=, -=, *=, etc.) para atualizar/reatribuir o valor de uma variável com os resultados das operações.
// Mostre os resultados no console utilizando console.log().