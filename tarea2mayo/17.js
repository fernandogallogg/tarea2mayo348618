const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce el primer número: ', (num1) => {
    readline.question('Introduce el segundo número: ', (num2) => {
        let count = 0;
        let sumMultiplos = 0;

        for (let i = num1; i <= num2; i++) {
            if (i % 2 === 0) {
                console.log(i);
                count++;
                sumMultiplos += i;
            }
        }

        console.log("Cantidad de múltiplos de 2: ", count);
        console.log("La suma de los múltiplos de 2 es: ", sumMultiplos);
        readline.close();
    });
});
