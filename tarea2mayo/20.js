function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número: ', (num) => {
    console.log(`El factorial de ${num} es: ${factorial(num)}`);
    readline.close();
});
