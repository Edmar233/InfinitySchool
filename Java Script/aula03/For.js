/* for (let i =0; i<=20; i++){
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);

    if (i > 15){
        break;
    }
} */

const palavra = prompt("Digite uma palavra: ")

for (const letra of palavra){
    console.log(letra);
}