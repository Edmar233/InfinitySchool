
let numero = parseInt(prompt("Digite um numero positivo : "))
let soma = 0;
let i =1;

while (i <= numero){
    soma = soma + i; // ou soma += 1;
    document.writeln(`${soma}`)
    i ++;
}

alert(`A soma de 1 até ${numero} é : ${soma}`)

