const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce una frase: ', (frase) => {
    for (let i = 0; i < 5; i++) {
        console.log(" ".repeat(i * 4) + frase);
    }
    readline.close();
});
