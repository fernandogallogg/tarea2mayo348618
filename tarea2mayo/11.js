const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número: ', (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            console.log(i);
            count++;
        }
    }
    console.log("Cantidad de múltiplos de 3:", count);
    readline.close();
});
