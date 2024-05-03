const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número mayor o igual a 1: ', (num) => {
    if (num < 1) {
        console.log("El número debe ser mayor o igual a 1");
    } else {
        let esPrimo = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            console.log("El número es primo");
        } else {
            console.log("El número no es primo");
        }
    }
    readline.close();
});
