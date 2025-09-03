const numero1 = 8;
let palpite;

while(true){
    palpite = parseInt(prompt("Adivinhe um numero entre 0 e 10 : "))
    if(numero1 === palpite){
        alert("Numero correto")
        break;
    }else{
        alert("Numero incorreto, tente novamente")
    }
}