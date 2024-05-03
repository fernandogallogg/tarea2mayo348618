const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce S o N: ', (input) => {
    if (input.toUpperCase() === 'S' || input.toUpperCase() === 'N') {
        console.log("Has introducido:", input.toUpperCase());
    } else {
        console.log("Solo se permite introducir S o N");
    }
    readline.close();
});
