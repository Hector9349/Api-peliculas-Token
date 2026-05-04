require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");
require("./modules/pelicula.model");

const PORT = process.env.PORT || 3000;

const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error al iniciar el servidor");
  }
};

iniciarServidor();
