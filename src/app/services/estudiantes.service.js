//arreglo en memoria. Esto significa que todavía no estamos usando una base de datos.
let estudiantes = [
    {
     id: 1,
     nombre: "Michelle",
     correo: "michelle@gmail.com",
     edad: 25
    }
];

//Esta función devuelve todos los estudiantes.
const obtenerTodos = () => {
    return estudiantes;
};

//Busca un estudiante por su identificador.
const obtenerPorId = (id) => {
    return estudiantes.find ((estudiante) => estudiante.id === id)
};

/* NOTA:
 El signo = (Asignación) -> Sirve para guardar un valor dentro de una variable.
 Los signos == (Igualdad débil) -> Sirve para comparar dos valores.
Los tres signos === (Igualdad estricta) -> Sirve para comparar el valor y el tipo de dato al mismo tiempo.
*/

//Crea un nuevo estudiante copiando los datos recibidos.
const crear = (datos) => {
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        ...datos
    };

    estudiantes.push (nuevoEstudiante);

    return nuevoEstudiante;
};

const actualizar = (id, datos) => {

    //Buscamos la posición del estudiante.
    const indice = estudiantes.findIndex (
        (estudiante) => estudiante.id === id
    );

    if (indice === -1){
        return null;
    }

    estudiantes [indice] = {
        ...estudiantes[indice],
        ...datos,
        id
    };

    return estudiantes [indice];
};

const eliminar = (id) => {
    const indice = estudiantes.findIndex(
        (estudiante) => estudiante.id === id
    );

    if (indice === -1){
        return null;
    }

    const estudianteEliminado = estudiantes[indice];

    //Eliminar un elemento del arreglo comenzando 
    // desde determinada posición.
    estudiantes.splice (indice, 1);

    return estudianteEliminado
};


//Si crean una función pero olvidan exportarla, 
// después el controller no podrá utilizarla.
module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};