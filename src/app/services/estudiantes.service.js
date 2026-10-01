const supabase = require("../config/supabaseAdmin");

//Esta función devuelve todos los estudiantes.
const obtenerTodos = async () => {
    const { data, error } = await supabase
        .from('estudiantes')
        .select('*');

    if (error) {
        throw error;
    }

    return data;
};

//Busca un estudiante por su identificador.
const obtenerPorId = async (id) => {
    
    const { data, error } = await supabase
        .from("estudiantes")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw error;
    }

    return data;
};

/* NOTA:
 El signo = (Asignación) -> Sirve para guardar un valor dentro de una variable.
 Los signos == (Igualdad débil) -> Sirve para comparar dos valores.
Los tres signos === (Igualdad estricta) -> Sirve para comparar el valor y el tipo de dato al mismo tiempo.
*/

//Crea un nuevo estudiante copiando los datos recibidos.
const crear = async (estudiante) => {

    const { data, error } = await supabase
        .from("estudiantes")
        .insert(estudiante)
        .select()
        .single();

    if(error) {
        throw error;
    }

    return data;
};

const actualizar = async (id, estudiante) => {

    const { data, error } = await supabase
        .from("estudiantes")
        .update(estudiante)
        .eq("id", id)
        .select()
        .single();
    
    if(error){
        throw error;
    }

    return data;
};

const eliminar = async (id) => {
    
    const { data, error }  = await supabase
        .from("estudiantes")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error){
        throw error;
    }

    return data;
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