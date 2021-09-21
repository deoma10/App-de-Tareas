const readline = require("readline");
const logic = require('./logica');
const fs = require('fs');

const tareas = require('./database/tareas.json');




const funcionalidades = (opciones) => {
    switch (opciones){
        case 'listar':
            const tareasJson = JSON.stringify(tareas,null,4);
            let tareasConvertidas = JSON.parse(tareasJson);
            console.clear(); 
            console.log("Las tareas actualmente en la plataforma son: "); 
            
            tareasConvertidas.forEach(function(item){
                console.log(item);
            });
        
        break;

        case 'ingresar':
                const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
                });

                rl.question("Cúal es el titulo de su tarea: ", function(titulo) {
                    rl.question("Cúal es el estado de su tarea: Terminada, En progreso o Pendiente: ", function(estado) {
                        logic.registerNote(titulo, estado);
                        console.clear(); 
                        console.log(`El titulo de su nueva tarea es: "${titulo}" y el estado actual de su tarea es: "${estado}"`);                 
                        rl.close();
                    });
                });

                rl.on("close", function() {
                    process.exit(0);
                });
        break;

        case 'filtrar':
            let salida;
            const l = readline.createInterface({
                input: process.stdin,
                output: process.stdout
                });
            
            l.question('Cúal el estado de las tareas que quiere filtrar: Terminada, En progreso o Pendiente: ', (respuesta) => {
                console.clear();
                salida = respuesta;
                l.close()
            });
            
            setTimeout(() => {
                console.log(logic.filtrarPorEstado(salida));}, 7000); // 5 seconds
                      
        break; 

        case 'salir':
            console.log("¡Gracias por usar la aplicación de tareas, vuelve pronto!");
        break; 
        case undefined:
            console.log("Atención - Tienes que pasar una acción");
        break;    

        default:
            console.log("No entiendo qué quieres hacer.");    
        break;
    }
};



module.exports = {funcionalidades};