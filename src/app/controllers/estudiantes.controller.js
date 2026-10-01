//Acceso a Estudiantes services
const estudiantesService = require ("../services/estudiantes.service");


// La declaración async function crea un enlace de una nueva función asíncrona a un nombre dado.
// La palabra clave await está permitida dentro del cuerpo de la función, lo que permite escribir 
// un comportamiento asíncrono basado en promesas de un estilo más limpio y evitar la necesidad 
// de configurar explícitamente cadenas de promesas.

const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes =
         await estudiantesService.obtenerTodos();

        res.status(200).json(estudiantes);
    } catch (error){
        res.status(500).json({
            error: "Error al obtener estudiantes"
        });
    }
};


const obtenerEstudiantesPorId = async (req, res) => {
  try{

    const {id} = req.params;

    const estudiante =
        await estudiantesService.obtenerPorId(id);

    res.status(200).json(estudiante);

  }catch (error){

    console.error(error);

    res.status(404).json({
        error: "Estudiante no encontrado"
    });
  }
};

const crearEstudiante = async (req, res) => {

    try{

        const estudiante =
         await estudiantesService.crear(req.body);

        res.status(201).json(estudiante);
    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Error al crear estudiante"
        });
    }
};

const actualizarEstudiante = async (req, res) => {

    try{

        const {id} = req.params;

        const estudiante =
            await estudiantesService.actualizar(
                id,
                req.body
            );

        res.status(200).json(estudiante);

    }catch (error){

        console.error (error);

        res.status(500).json({
            error: "Error al actualizar estudiante"
        });
    }
}; 

const eliminarEstudiante = async (req, res) => {
    
    try{

        const {id} = req.params;

        const estudiante =
            await estudiantesService.eliminar(id);
            
            res.status(200).json({
                mensaje: "Estudiante Eliminado",
                estudiante
            });
            
    }catch (error){

        console.error (error);

        res.status(500).json({
            error: "Error al eliminar estudiante"
        });
    }
};

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantesPorId,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};