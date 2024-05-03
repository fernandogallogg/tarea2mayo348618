const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número: ', (num) => {
    num = parseInt(num);

    function esPrimo(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        let i = 5;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    console.log(`Número introducido: ${num}`);
    if (esPrimo(num)) {
        console.log("El número es primo");
    } else {
        console.log("El número no es primo");
    }
    console.log(`Factorial: ${factorial(num)}`);
    console.log("Tabla de multiplicar: ");
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }

    readline.close();
});
