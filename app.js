const readline = require('readline');
const funcionesTareas = require('./tareas');
const imprimir = require('./infoMenu');

let salida;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

        rl.question(imprimir.escribir(0),(respuesta) => {
            console.clear();
            salida = respuesta
            rl.close()
        });
        
     
        setTimeout(() => {
            funcionesTareas.funcionalidades(salida);}, 5000); // 6 segundos


