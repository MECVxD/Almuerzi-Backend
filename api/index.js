//Orquesta toda la aplicacion

//Importar modulos de node
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Rutas
const meals = require("./routes/meals");
const orders = require("./routes/orders");
const auth = require("./routes/auth");

//Iniciar el servidor
const app = express();

//Implementar las liberias para que trabajen junto con express
app.use(bodyParser.json());
app.use(cors());

//Conexion con Mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*Configurar la peticion get
app.get("*", (req, res) => {
  res.send("chanchito feliz");
});
const meals = app.router();
*/

//Cuando llegue una peticion de esa rutas llamara a las instancias correspondientes
app.use("/api/meals", meals);
app.use("/api/orders", orders);
app.use("/api/auth", auth);

//Exportar app
module.exports = app;
