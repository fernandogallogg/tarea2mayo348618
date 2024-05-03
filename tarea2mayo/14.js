const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 5; i++) {
    readline.question('Introduce un número: ', (num) => {
        num = parseInt(num);
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
        if (i === 4) {
            console.log("El mayor número es: ", max);
            console.log("El menor número es: ", min);
            readline.close();
        }
    });
}
