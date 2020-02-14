const express = require('express');
const routes = express.Router();

// Controllers
const
    CardController = require('./controllers/CardController'),
    DeckController = require('./controllers/DeckController'),
    FileController = require('./controllers/FileController'),
    UserController = require('./controllers/UserController');

routes.get('/cards', (req, res) => { return new CardController().list(req, res); });
routes.get('/cards/:id', (req, res) => { return new CardController().findById(req, res); });
routes.post('/cards', (req, res) => { return new CardController().create(req, res); });
routes.put('/cards/:id', (req, res) => { return new CardController().update(req, res); });
routes.delete('/cards/:id', (req, res) => { return new CardController().delete(req, res); });

routes.get('/decks', (req, res) => { return new DeckController().list(req, res); });
routes.get('/decks/:id', (req, res) => { return new DeckController().findById(req, res); });
routes.post('/decks', (req, res) => { return new DeckController().create(req, res); });
routes.put('/decks/:id', (req, res) => { return new DeckController().update(req, res); });
routes.delete('/decks/:id', (req, res) => { return new DeckController().delete(req, res); });

routes.get('/files', (req, res) => { return new FileController().list(req, res); });
routes.get('/files/:id', (req, res) => { return new FileController().findById(req, res); });
routes.post('/files', (req, res) => { return new FileController().create(req, res); });
routes.put('/files/:id', (req, res) => { return new FileController().update(req, res); });
routes.delete('/files/:id', (req, res) => { return new FileController().delete(req, res); });

routes.get('/users', (req, res) => { return new UserController().list(req, res); });
routes.get('/users/:id', (req, res) => { return new UserController().findById(req, res); });
routes.post('/users', (req, res) => { return new UserController().create(req, res); });
routes.put('/users/:id', (req, res) => { return new UserController().update(req, res); });
routes.delete('/users/:id', (req, res) => { return new UserController().delete(req, res); });

module.exports = routes;