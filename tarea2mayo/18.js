const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce una frase: ', (frase) => {
    readline.question('Introduce la letra a buscar: ', (letra) => {
        let count = 0;
        for (let i = 0; i < frase.length; i++) {
            if (frase.charAt(i).toLowerCase() === letra.toLowerCase()) {
                count++;
            }
        }
        console.log(`La letra "${letra}" aparece ${count} veces en la frase.`);
        readline.close();
    });
});
