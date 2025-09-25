// CRIE UM PROGRAMA QUE PEÇA UMA FRASE AO USUÁRIO E VERIFIQUE SE ELA É UM PALINDROMO

let palavra = prompt("Digite uma palavra: ").toLocaleLowerCase()
let reverse = "";

for (let letra of palavra) {
  reverse = letra + reverse;
}
alert(`A palvara invertida é : ${reverse}`)

if (palavra === reverse) {
  alert("É um palíndromo!");
} else {
  alert("Não é um palíndromo!");
}



