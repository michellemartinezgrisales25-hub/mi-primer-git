const express = require ("express");

//Un router permite agrupar las rutas de un recurso.
const router = express.Router();

const estudiantesController = require ("../controllers/estudiantes.controller");


//Cuando llegue un GET a la ruta principal de estudiantes, ejecuta obtenerEstudiantes.
router.get("/", estudiantesController.obtenerEstudiantes);

//El :id es un parámetro dinámico.
router.get("/:id", estudiantesController.obtenerEstudiantesPorId);

//Esta ruta permite crear un estudiante.
router.post("/", estudiantesController.crearEstudiante);

//Esta ruta permite actualizar un estudiante.
router.put("/:id", estudiantesController.actualizarEstudiante);

//Esta ruta permite eliminar un estudiante.
router.delete("/:id", estudiantesController.eliminarEstudiante);


module.exports = router;
