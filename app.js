const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const sequelize = require('./config/database');
const jokesController = require('./Controllers/JokesController');

// Synchronisation du modèle avec la base de données
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to sync database:', err);
    });

// Création de l'application
const app = express();
// Définition du port
const port = process.env.PORT || 3000;

// Chargement du fichier YAML
const swaggerFile = './API.yaml';
const swaggerDocument = YAML.load(swaggerFile);

// Affiche la documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());

// Affichage de la page d'accueil
app.use(express.static(path.join(__dirname, 'Views/Jokes')));

// Gestion des routes pour l'affichage des blagues
app.use('/', jokesController);

// Afficher d'un message de bienvenue
app.get('/', (req, res) => {
    res.send('Welcome to Carambar Jokes API');
});

// Gestion des erreurs
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
