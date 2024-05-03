const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número menor de 5000: ', (num) => {
    if (num >= 5000) {
        console.log("El número debe ser menor de 5000.");
    } else {
        const romanos = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let resultado = '';
        let numero = num;

        for (let i = 0; i < romanos.length; i++) {
            const { value, numeral } = romanos[i];
            while (numero >= value) {
                resultado += numeral;
                numero -= value;
            }
        }

        console.log(`El número ${num} en romano es: ${resultado}`);
    }
    readline.close();
});
