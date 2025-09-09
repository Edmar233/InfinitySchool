let animais = ["Cachorro", "Gato" , "Papagaio"];

animais.push("Tartaruga"); //adicionou tartaruga no final


animais.shift();//removeu o cahorro inicio
animais.unshift("Coelho")// adicionou coelho no inicio

animais.splice(2,1,"Hamster"); //alterando a posição 02 e 1 elemento 

console.log(animais.length);

console.log(animais[1]);

console.log(animais);