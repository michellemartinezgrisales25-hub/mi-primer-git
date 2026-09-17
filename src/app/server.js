//Este archivo será el punto de entrada del servidor.
//Su única responsabilidad inicial será levantar el puerto.


//Estamos importando la aplicación que configuraremos en otro archivo.
const app = require("./app");
// Guardamos el puerto en una constante.
const PORT = 3000;


//Le indicamos que escuche las solicitudes en ese puerto.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



