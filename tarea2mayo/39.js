let valor = 1;
const tabla = [];

for (let i = 0; i < 3; i++) {
    tabla[i] = [];
    for (let j = 0; j < 4; j++) {
        tabla[i][j] = [];
        for (let k = 0; k < 5; k++) {
            tabla[i][j][k] = valor++;
        }
    }
}

tabla.forEach((pagina) => {
    pagina.forEach((fila) => {
        console.log(fila.join('\t'));
    });
    console.log('\n');
});

