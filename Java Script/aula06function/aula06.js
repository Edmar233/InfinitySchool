// function saudacao(nome = 'Edmar'){
//     console.log(`Olá, ${nome}, seja bem vindo(a)!`);
// }

// saudacao();
// saudacao('joão');

function listarFilmes(filmePrincipal, ...outrosFilmes){
    console.log(`Filme principal: ${filmePrincipal}`);
    console.log(`Outros filmes: ${outrosFilmes.join(" , ")}`);
}

listarFilmes('O Senhor dos Anéis', 'Harry Potter', 'Star Wars');
// listarFilmes('O Senhor dos Anéis');
// outrosFilmes ('Harry Potter', 'Star Wars')
