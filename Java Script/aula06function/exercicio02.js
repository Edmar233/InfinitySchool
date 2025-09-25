function desconto(preco, porcentagem) {
    const valorDesconto = preco * (porcentagem / 100);
    return preco - valorDesconto;
}

preco = parseInt(prompt("Digite o preço do produto: "));
porcentagem = parseFloat(prompt("Digite a porcentagem de desconto: "));

alert(`O preço original é: ${preco} e o valor com desconto de ${porcentagem}% é: ${desconto(preco, porcentagem)} \n o valor de desconto foi de : ${preco - desconto(preco, porcentagem).toFixed(2)}`);
