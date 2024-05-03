const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
readline.question('Introduce una frase (para terminar, escribe "fin"): ', (input) => {
    while (input.toLowerCase() !== 'fin') {
        count++;
        readline.question('Introduce otra frase (para terminar, escribe "fin"): ', (input) => {
            if (input.toLowerCase() === 'fin') {
                console.log("Cantidad de frases introducidas:", count);
                readline.close();
            }
        });
    }
});
