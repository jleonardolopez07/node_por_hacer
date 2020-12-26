const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descipcion de la tarea por hacer'
        }

    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descipcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado o pendiente la tarea'
        }
    })

.command('borrar', 'Borra una tarea', {
    descripcion: {
        alias: 'b',
        demand: true,
        desc: 'Borra la tarea a seleccionar'
    }

})

.help()
    .argv;

module.exports = {
    argv
}