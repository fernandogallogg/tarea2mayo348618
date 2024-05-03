const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número: ', (num) => {
    if (num % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
    readline.close();
});
