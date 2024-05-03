const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce el primer número: ', (num1) => {
    readline.question('Introduce el segundo número: ', (num2) => {
        let count = 0;
        let sumImpares = 0;

        for (let i = num1; i <= num2; i++) {
            console.log(i);
            count++;
            if (i % 2 !== 0) {
                sumImpares += i;
            }
        }

        console.log("Cantidad de números naturales: ", count);
        console.log("La suma de los impares es: ", sumImpares);
        readline.close();
    });
});
