const fs = require('fs');
const db = require('./database/tareas.json');

const registerNote = (tituloNota, estadoNota) => {
    
        const nota = {
            titulo : tituloNota,
            estado : estadoNota,
        };
      
        const currentDatabase = db;
        currentDatabase.push(nota);
        const notaJson = JSON.stringify(currentDatabase,null,4);
        fs.writeFileSync('./database/tareas.json',notaJson);
    
};

function filtrarPorEstado(estado){
    let arrayActual = db.filter(function(tarea){
        return tarea.estado == estado;
    })

return arrayActual;
}



module.exports = {registerNote,filtrarPorEstado};