const express = require('express');
const router = express.Router();
const Joke = require('../Models/Joke');

// Récupère toutes les blagues
router.get('/blagues', async (req, res) => {
    try {
        const jokes = await Joke.findAll();
        res.json(jokes);
    } catch (error) {
        console.error('Error fetching jokes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Récupère une blague aléatoire
router.get('/blagues/random', async (req, res) => {
    try {
        // Récupérer tous les IDs des blagues
        const jokes = await Joke.findAll({ attributes: ['id'] });
        if (jokes.length === 0) {
            return res.status(404).send('Aucune blague disponible');
        }

        // Sélectionner un ID aléatoire
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomId = jokes[randomIndex].id;

        // Récupérer la blague associée à cet ID
        const joke = await Joke.findByPk(randomId);
        res.json(joke);
    } catch (error) {
        console.error('Error fetching random joke:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Récupère une blague avec son ID
router.get('/blagues/:id', async (req, res) => {
    try {
        const joke = await Joke.findByPk(req.params.id);
        if (joke) {
            res.json(joke);
        } else {
            res.status(404).send('Blague non trouvée');
        }
    } catch (error) {
        console.error('Error fetching joke by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Ajoute une nouvelle blague
router.post('/blagues', async (req, res) => {
    try {
        const joke = await Joke.create(req.body);
        res.status(201).json(joke);
    } catch (error) {
        console.error('Error adding joke:', error);
        res.status(400).json({ error: 'Erreur de validation' });
    }
});

module.exports = router;
