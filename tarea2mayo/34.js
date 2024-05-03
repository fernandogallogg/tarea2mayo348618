const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let calificaciones = [];

readline.question('Introduce las calificaciones separadas por espacios: ', (input) => {
    calificaciones = input.split(' ').map(Number);
    readline.question('Introduce la calificación a buscar: ', (nota) => {
        nota = parseInt(nota);
        if (calificaciones.includes(nota)) {
            console.log(`La calificación ${nota} está en la lista.`);
        } else {
            console.log(`La calificación ${nota} no está en la lista.`);
        }
        readline.close();
    });
});
