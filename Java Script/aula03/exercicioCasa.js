// CRIE UM PROGRAMA QUE PEÇA UMA FRASE AO USUÁRIO E VERIFIQUE SE ELA É UM PALINDROMO

let frase = prompt("Digite uma palavra: ").toLocaleLowerCase()
let reverse = "";

for (let letra of frase.toLowerCase().replaceAll(" ","")) {
  reverse = letra + reverse;
}
alert(`A palvara invertida é : ${reverse}`)

if (reverse === frase.toLowerCase().replaceAll(" ", "")) {
  alert("É um palíndromo!");
} else {
  alert("Não é um palíndromo!");
}


