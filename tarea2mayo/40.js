const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let ventas = [];

for (let i = 0; i < 4; i++) {
    ventas[i] = [];
    console.log(`Vendedor ${i + 1}:`);
    for (let j = 0; j < 12; j++) {
        readline.question(`Introduce las ventas del mes ${j + 1}: `, (venta) => {
            ventas[i][j] = parseFloat(venta);
            if (i === 3 && j === 11) {
                let totalVentas = 0;
                ventas.forEach((vendedor) => {
                    totalVentas += vendedor.reduce((acc, val) => acc + val, 0);
                });
                console.log(`Total de ventas en el año: ${totalVentas}`);
                readline.close();
            }
        });
    }
}
