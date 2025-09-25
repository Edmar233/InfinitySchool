function soma(...numeros) {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}

console.log(soma(1, 2, 3));
console.log(soma(10, 20, 30, 40, 50));


function multiplicar(a,b){
    return a * b;
}

console.log(multiplicar(5, 6));