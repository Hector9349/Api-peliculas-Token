const express = require("express");
const router = express.Router();

const {
  obtenerPeliculas,
  obtenerPeliculaPorId,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula
} = require("../services/peliculas.service");

router.get("/", async (req, res, next) => {
  try {
    const peliculas = await obtenerPeliculas();
    res.json(peliculas);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const pelicula = await obtenerPeliculaPorId(req.params.id);

    if (!pelicula) {
      return res.status(404).json({
        mensaje: "Película no encontrada"
      });
    }

    res.json(pelicula);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { titulo, director, genero } = req.body;
    const año = req.body.año;

    if (!titulo || !director || !genero || !año) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios: titulo, director, genero y año"
      });
    }

    const nuevaPelicula = await crearPelicula({
      titulo,
      director,
      genero,
      año
    });

    res.status(201).json({
      mensaje: "Película creada correctamente",
      pelicula: nuevaPelicula
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const peliculaActualizada = await actualizarPelicula(req.params.id, req.body);

    if (!peliculaActualizada) {
      return res.status(404).json({
        mensaje: "Película no encontrada"
      });
    }

    res.json({
      mensaje: "Película actualizada correctamente",
      pelicula: peliculaActualizada
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const peliculaEliminada = await eliminarPelicula(req.params.id);

    if (!peliculaEliminada) {
      return res.status(404).json({
        mensaje: "Película no encontrada"
      });
    }

    res.json({
      mensaje: "Película eliminada correctamente"
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
