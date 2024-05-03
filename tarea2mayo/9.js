const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un numero: ', (num) => {
    if (num > 0) {
        console.log("El numero es positivo");
    } else if (num < 0) {
        console.log("El numero es negativo");
    } else {
        console.log("El numero es 0");
    }
    readline.close();
});
