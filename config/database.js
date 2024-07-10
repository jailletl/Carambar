const { Sequelize } = require('sequelize');

// Création d'une nouvelle instance de Sequelize
const sequelize = new Sequelize({
    // Utilisation de SQLite pour la base de données
    dialect: 'sqlite',
    storage: './database.sqlite',
});

module.exports = sequelize;
