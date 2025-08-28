//let a = true;
//let b = false;

//console.log( a && b );

//console.log( a || b );

//console.log(!a);

const numero1 = parseFloat(prompt ("Digite um numero: "))
const numero2 = parseFloat(prompt ("Digite outro numero: "))

if (numero1 >=0 && numero2 >=0) {
    document.writeln("Os 2 numeros são Positivos <br>")
} else if  (numero1 >=0 || numero2 >=0){
    document.writeln("Pele menos 1 dos numeros é Positivo <br>")
}else {
    document.writeln("Os 2 numeros são Negativos <br>")
} 

if (numero1 % 2 == 0  ){
    document.writeln(`O numero ${numero1} é Par <br>`)

}else{
    document.writeln(`O numero ${numero1} é Impar <br>`)
}
if (numero2 % 2 == 0 ){
    document.writeln(`O numero ${numero2} é Par <br>`)
}else{
    document.writeln(`O numero ${numero2} é Impar <br>`)
}