//Este archivo tendrá la configuración principal de Express.

//Importamos Express
const express = require("express");

const estudiantesRoutes = require("./routes/estudiantes.routes");

//Creamos la aplicación
const app = express();
//Permite que Express pueda recibir datos enviados en formato JSON
app.use (express.json());


app.get("/", (req, res) => {
 res.send("API funcionando correctamente");
});

app.use("/estudiantes", estudiantesRoutes);

//Esta línea permite que server.js pueda utilizar la aplicación
module.exports = app;
