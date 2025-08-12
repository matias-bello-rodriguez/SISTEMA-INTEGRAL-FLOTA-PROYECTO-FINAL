require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Dirección del servidor de la BD (localhost)
    dialect: process.env.DB_DIALECT, // Tipo de base de datos (mysql)
    logging: console.log, // Habilita los mensajes SQL en consola para depuración
    pool: {
      max: 5, // Máximo de conexiones activas
      min: 0, // Mínimo de conexiones inactivas
      acquire: 30000, // Tiempo máximo (ms) para intentar obtener una conexión antes de lanzar error
      idle: 10000, // Tiempo máximo (ms) que una conexión puede estar inactiva antes de ser liberada
    },
  }
);

module.exports = sequelize;
