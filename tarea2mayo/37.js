const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numCursos = 0;
let numAlumnosPorCurso = 0;
let notas = [];

readline.question('Introduce el número de cursos: ', (cursos) => {
    numCursos = parseInt(cursos);
    readline.question('Introduce el número de alumnos por curso: ', (alumnos) => {
        numAlumnosPorCurso = parseInt(alumnos);
        for (let i = 0; i < numCursos; i++) {
            notas[i] = [];
            console.log(`Curso ${i + 1}:`);
            for (let j = 0; j < numAlumnosPorCurso; j++) {
                readline.question(`Introduce la nota del alumno ${j + 1}: `, (nota) => {
                    notas[i][j] = parseFloat(nota);
                    if (i === numCursos - 1 && j === numAlumnosPorCurso - 1) {
                        console.log("Notas introducidas:");
                        for (let k = 0; k < notas.length; k++) {
                            console.log(`Curso ${k + 1}: ${notas[k].join(', ')}`);
                        }
                        readline.close();
                    }
                });
            }
        }
    });
});
