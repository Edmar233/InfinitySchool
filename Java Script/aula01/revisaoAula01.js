
const nome = (prompt ("Digite seu nome: "))
const idade = parseInt(prompt ("Digite o ano de seu nascimento: "))

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
const soma = anoAtual - idade


document.writeln(`${nome} você nasceu em ${idade} e sua idade é: ${soma} anos.`)