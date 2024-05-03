const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce una frase: ', (frase) => {
    const anchoTerminal = process.stdout.columns;
    const espacios = Math.floor((anchoTerminal - frase.length) / 2);
    console.log(" ".repeat(espacios) + frase);
    readline.close();
});
