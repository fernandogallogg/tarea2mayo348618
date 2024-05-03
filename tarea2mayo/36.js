const matriz = [];

for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100) + 1;
    }
}

const matrizTranspuesta = [];

for (let i = 0; i < 5; i++) {
    matrizTranspuesta[i] = [];
    for (let j = 0; j < 4; j++) {
        matrizTranspuesta[i][j] = matriz[j][i];
    }
}

matrizTranspuesta.forEach((fila) => {
    console.log(fila.join('\t'));
});
