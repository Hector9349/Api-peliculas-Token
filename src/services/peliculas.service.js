const Pelicula = require("../modules/pelicula.model");

const obtenerPeliculas = async () => {
  return await Pelicula.findAll();
};

const obtenerPeliculaPorId = async (id) => {
  return await Pelicula.findByPk(id);
};

const crearPelicula = async (datos) => {
  return await Pelicula.create(datos);
};

const actualizarPelicula = async (id, datos) => {
  const pelicula = await Pelicula.findByPk(id);

  if (!pelicula) {
    return null;
  }

  await pelicula.update(datos);
  return pelicula;
};

const eliminarPelicula = async (id) => {
  const pelicula = await Pelicula.findByPk(id);

  if (!pelicula) {
    return null;
  }

  await pelicula.destroy();
  return pelicula;
};

module.exports = {
  obtenerPeliculas,
  obtenerPeliculaPorId,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula
};
