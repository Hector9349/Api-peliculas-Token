const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Pelicula = sequelize.define("Pelicula", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  "año": {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Pelicula;
