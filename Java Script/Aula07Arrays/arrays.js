const numeros =[1,2,3,4,5,6,0] 
// EXERCICIO 01 (forEach)
// numeros.forEach((numero, posicao) => {
//     // console.log(`O elemento na posição ${posicao} é ${numero}`);
//     if (numero > 0 ){
//         console.log(`O Numero ${numero} na posição ${posicao} é positivo`)
//     } else if(numero < 0){
//         console.log(`O Numero ${numero} na posição ${posicao} é negativo`)
//     }else if (numero === 0 ){
//         console.log(`O Numero ${numero} na posição ${posicao} é ZERO`)
//     }

// });

//EXERCICIO 02(Map)
// const quadrados = numeros.map((numero)=> {
//     return numero * numero
// });

// console.log(quadrados)

//EXERCICIO 03(Filter)

// const pares = numeros.filter((numero)=>{
//     return numero % 2 === 0;
// });
// console.log(pares)

//EXERCICIO 04(Reduce)

// const soma = numeros.reduce((acumulador, valorAtual)=>{
//     return acumulador + valorAtual;
// });
// console.log(`A soma de todos os numeros do Arrya é: ${soma}`)

//EXERCICIO 05 (Some)

// const existe = numeros.filter((numero)=>{
//      return numero < 0;
// });
// console.log(`os numeros negativos encontrados são: ${existe}`)

//EXERCICIO 06 (Find)

// const primeiroImpar = numeros.find((numero)=>{
//      return numero % 2 !== 0;
// });
// console.log(`O Primeiro numero impar encontrado é: ${primeiroImpar}`)

//EXERCICIO 07 (Every - Todos os Elementos devem atender a consição)

const todos = numeros.every((numero)=>{
    return numero > 0;

});
if (todos === true){
    console.log(`Todos os elementos são positivos e maiores que zero`)
}else 
console.log(`Há elementos negativos ou iguais a zero`)

