const Joke = require('../Models/Joke');

const seedJokes = async () => {
    try {
        console.log('Joke model:', Joke);

        // Synchronisation du modèle Joke avec la base de données
        await Joke.sync({ force: true });

        // Insertion des blagues dans la base de données
        await Joke.bulkCreate([
            { content: "Quelle est la femelle du hamster ? - L’Amsterdam" },
            { content: "Que dit un oignon quand il se cogne ? - Aïe" },
            { content: "Quel est l'animal le plus heureux ? - Le hibou, parce que sa femme est chouette." },
            { content: "Pourquoi le football c'est rigolo ? - Parce que Thierry en rit" },
            { content: "Quel est le sport le plus fruité ? - La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
            { content: "Que se fait un Schtroumpf quand il tombe ? - Un Bleu" },
            { content: "Quel est le comble pour un marin ? - Avoir le nez qui coule" },
            { content: "Qu'est ce que les enfants usent le plus à l'école ? - Le professeur" },
            { content: "Quel est le sport le plus silencieux ? - Le para-chuuuut" },
            { content: "Quel est le comble pour un joueur de bowling ? - C’est de perdre la boule" },
        ]);

        console.log("Jokes have been seeded");
    } catch (error) {
        console.error('Failed to seed jokes:', error);
    } finally {
        process.exit(); // Termine le processus une fois l'opération terminée
    }
};

seedJokes(); // Appelle la fonction pour executer le processus d'ajout des blagues
