const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce el primer número: ', (num1) => {
    readline.question('Introduce el segundo número: ', (num2) => {
        console.log("Seleccione la operación:");
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");

        readline.question('Opción: ', (opcion) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            switch (opcion) {
                case '1':
                    console.log(`La suma es: ${num1 + num2}`);
                    break;
                case '2':
                    console.log(`La resta es: ${num1 - num2}`);
                    break;
                case '3':
                    console.log(`La multiplicación es: ${num1 * num2}`);
                    break;
                case '4':
                    if (num2 === 0) {
                        console.log("No se puede dividir por 0.");
                    } else {
                        console.log(`La división es: ${num1 / num2}`);
                    }
                    break;
                default:
                    console.log("Opción inválida.");
                    break;
            }
            readline.close();
        });
    });
});
