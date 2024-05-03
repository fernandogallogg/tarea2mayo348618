const matriz = [
    [5, 'E'],
    [3, 'C'],
    [2, 'B'],
    [4, 'D'],
    [1, 'A']
];

function ordenarMatrizPorPrimeraColumna(matriz) {
    let n = matriz.length;
    for (let intervalo = Math.floor(n / 2); intervalo > 0; intervalo = Math.floor(intervalo / 2)) {
        for (let i = intervalo; i < n; i++) {
            let temp = matriz[i];
            let j;
            for (j = i; j >= intervalo && matriz[j - intervalo][0] > temp[0]; j -= intervalo) {
                matriz[j] = matriz[j - intervalo];
            }
            matriz[j] = temp;
        }
    }
    return matriz;
}

const matrizOrdenada = ordenarMatrizPorPrimeraColumna(matriz);
matrizOrdenada.forEach((fila) => {
    console.log(fila.join('\t'));
});
