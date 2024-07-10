const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Définition du modèle Joke dans Sequelize
const Joke = sequelize.define('Joke', {
    // Définition du champ 'content' de la table 'Joke'
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Joke;