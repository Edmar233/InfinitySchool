let numero1 = parseInt(prompt("Digite um numero: "))
let numero2 = parseInt(prompt("Digite outro numero: "))


console.log(`A soma entre os numeros ${numero1} e ${numero2} é : ${numero1 + numero2}`)
console.log(`A subtração entre os numeros ${numero1} e ${numero2} é : ${numero1 - numero2}`)
console.log(`A multiplicação entre os numeros ${numero1} e ${numero2} é : ${numero1 * numero2}`)
console.log(`A divisão entre os numeros ${numero1} e ${numero2} é : ${numero1 / numero2}`)
console.log(`O resto da divisão entre os numeros ${numero1} e ${numero2} é : ${numero1 % numero2}`)
console.log("")

console.log("Resultado com Atribuição ")
console.log("")
let result = numero1;
// Atribuição Adição
result += numero2;
console.log(`A soma entre os numeros ${numero1} e ${numero2} é : ${result}`)

// Atribuição Subtração
result = numero1;//reseta ao valor original 
result -= numero2;
console.log(`A subtração entre os numeros ${numero1} e ${numero2} é : ${result}`)

// Atribuição Multiplicação
result = numero1;
result *= numero2;
console.log(`A multiplicação entre os numeros ${numero1} e ${numero2} é : ${result}`)

// Atribuição Divisão
result = numero1;
result /= numero2;
console.log(`A divisão entre os numeros ${numero1} e ${numero2} é : ${result}`)

// Atribuição Resto
result = numero1;
result %= numero2;
console.log(`O resto da divisão entre os numeros ${numero1} e ${numero2} é : ${result}`)


