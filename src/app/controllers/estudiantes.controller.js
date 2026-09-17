//Acceso a Estudiantes services
const estudiantesService = require ("../services/estudiantes.service");


const obtenerEstudiantes = (req, res) => {
    const estudiantes = estudiantesService.obtenerTodos();

    res.json(estudiantes);
};

const obtenerEstudiantesPorId = (req, res) => {
    const id = Number (req.params.id);

    const estudiante = estudiantesService.obtenerPorId(id);

    if(!estudiante) {
        return res.status (404).json({
            error: "Estudiante no encontrado"
        });
    }

    res.json(estudiante);
};

const crearEstudiante = (req, res) => {
    const {nombre, correo, edad} = req.body;

    if(!nombre || !correo || !edad) {
        return res.status(400).json({
            error: "Todos los campos son obligatorios"
        });
    }

    const nuevoEstudiante = estudiantesService.crear({
        nombre,
        correo,
        edad
    });

    res.status(201).json(nuevoEstudiante);
};

const actualizarEstudiante = (req, res) => {
    const id = Number (req.params.id);

    const datos = req.body;

    const estudianteActualizado = estudiantesService.actualizar(id, datos);

    if (!estudianteActualizado) {
        return res.status (404).json({
            error: "Estudiante no encontrado"
        });
    }

    res.status (200).json({
        mensaje: "Estudiante Actualizado Correctamente",
        estudiante: estudianteActualizado
    });
}; 

const eliminarEstudiante = (req, res) => {
    const id = Number (req.params.id);

    const estudianteEliminado = estudiantesService.eliminar(id);

    if (!estudianteEliminado) {
        return res.status(404).json({
            error: "Estudiante no encontrado"
        });
    }

    res.status(200).json({
        mensaje: "Estudiante eliminado correctamente",
        estudiante: estudianteEliminado
    });
};

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantesPorId,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};