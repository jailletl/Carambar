const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['./Controllers/JokesController.js'];

const doc = {
    info: {
        title: 'Carambar Jokes API', // Titre de l'API
        description: 'API pour gérer les blagues de Carambar', // Description de l'API
    },
    host: 'carambar-n3r8.onrender.com', // Hôte où l'API est déployée
    schemes: ['https'],
    definitions: {
        Joke: {
            content: "string"
        },
    },
};

// Génèration du fichier de documentation
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app');// Démarre l'application une fois la documentation générée
});
