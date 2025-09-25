function desconto(preco, porcentagem) {
    const valorDesconto = preco * (porcentagem / 100);
    const precoNovo = preco - valorDesconto;
    return precoNovo;
}

preco = parseInt(prompt("Digite o preço do produto: "));
porcentagem = parseFloat(prompt("Digite a porcentagem de desconto: "));

alert(`O preço original é: ${preco} \n
     Valor com desconto de ${porcentagem}% é: ${desconto(preco, porcentagem)} \n
     Valor de desconto foi de : ${(preco - desconto(preco, porcentagem)).toFixed(2)}`);
