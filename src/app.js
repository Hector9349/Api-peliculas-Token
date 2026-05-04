const express = require("express");

const logger = require("./middlewares/logger");
const validarToken = require("./middlewares/validarToken");
const errorHandler = require("./middlewares/errorHandler");
const authRoutes = require("./routes/auth.routes");
const peliculasRoutes = require("./routes/peliculas.routes");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    mensaje: "API RESTful de películas funcionando correctamente"
  });
});

app.use("/", authRoutes);
app.use("/peliculas", validarToken, peliculasRoutes);
app.use(errorHandler);

module.exports = app;
