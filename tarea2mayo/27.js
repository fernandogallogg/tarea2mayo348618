const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número entre 0 y 10: ', (num) => {
    if (num < 0 || num > 10) {
        console.log("El número debe estar entre 0 y 10");
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
    readline.close();
});
