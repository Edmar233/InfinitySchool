function saudacao(){
    let nomes = [];
    let nome = "";

    while (nome !== "0" ) {
        nome = (prompt(`Digite o nome: \n ou \n digite "0" para encerrar o programa)`));
        
        if (nome === "0") {
            console.log(`Programa encerrado. Até mais!`);
            break
        }
        nomes.push(nome);
    }
    console.log(`Seja(m) bem vindo(s) !!! ${nomes.join(", ")}`);
}

saudacao();