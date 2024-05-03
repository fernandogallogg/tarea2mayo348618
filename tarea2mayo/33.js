const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let calificaciones = [];

readline.question('Introduce las calificaciones separadas por espacios: ', (input) => {
    calificaciones = input.split(' ').map(Number);
    const media = calificaciones.reduce((acc, val) => acc + val, 0) / calificaciones.length;
    console.log(`La media de calificaciones es: ${media.toFixed(2)}`);
    readline.close();
});
