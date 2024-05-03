let sumPares = 0;
let sumImpares = 0;

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 2 === 0) {
        sumPares += i;
    } else {
        sumImpares += i;
    }
}

console.log("La suma de los pares es:", sumPares);
console.log("La suma de los impares es:", sumImpares);
