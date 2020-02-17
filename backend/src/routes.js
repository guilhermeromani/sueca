const express = require('express');
const routes = express.Router();

// Controllers
const
    CardController = require('./controllers/CardController'),
    DeckController = require('./controllers/DeckController'),
    ImageController = require('./controllers/ImageController'),
    UserController = require('./controllers/UserController');

//#region CARDS
routes.get('/cards', (req, res) => { return new CardController().list(req, res); }); // Get Several Cards
routes.get('/cards/:id', (req, res) => { return new CardController().findById(req, res); }); // Get a Card
routes.put('/cards/:id', (req, res) => { return new CardController().update(req, res); });
routes.get('/decks/:deck_id/cards', (req, res) => { return new CardController().getCards(req, res); }); // Get a Deck's Cards
// routes.delete('/cards/:id', (req, res) => { return new CardController().delete(req, res); });
//#endregion

//#region DECKS
routes.get('/decks/:id', (req, res) => { return new DeckController().findById(req, res); }); // Get a Deck
routes.get('/decks', (req, res) => { return new DeckController().list(req, res); }); // Get Several Decks
routes.post('/users/:user_id/decks', (req, res) => { return new DeckController().create(req, res); }); // Create a Deck
routes.put('/decks/:id', (req, res) => { return new DeckController().update(req, res); }); // Change a Deck's Details
routes.post('/decks/:deck_id/cards', (req, res) => { return new DeckController().addCard(req, res); }); // Add a new Card to a Deck
routes.get('/users/:user_id/decks', (req, res) => { return new DeckController().create(req, res); }); // Get a List of a User's Decks
routes.get('/me/decks', (req, res) => { return new DeckController().create(req, res); }); // Get a List of Current User's Decks
routes.put('/decks/:deck_id/images', (req, res) => { return new DeckController().update(req, res); }); // Upload a Custom Deck Cover Image
routes.delete('/decks/:deck_id/cards', (req, res) => { return new DeckController().delete(req, res); }); // Remove Cards from a Deck
routes.delete('/decks/:id', (req, res) => { return new DeckController().delete(req, res); });
//#endregion

//#region IMAGES
routes.get('/images', (req, res) => { return new ImageController().list(req, res); });
routes.get('/images/:id', (req, res) => { return new ImageController().findById(req, res); });
routes.post('/images', (req, res) => { return new ImageController().create(req, res); });
routes.put('/images/:id', (req, res) => { return new ImageController().update(req, res); });
routes.delete('/images/:id', (req, res) => { return new ImageController().delete(req, res); });
//#endregion

//#region USERS
routes.get('/users', (req, res) => { return new UserController().list(req, res); });
routes.get('/users/:id', (req, res) => { return new UserController().findById(req, res); });
routes.get('/me', (req, res) => { return new UserController().findById(req, res); });
routes.post('/users', (req, res) => { return new UserController().create(req, res); });
routes.put('/users/:id', (req, res) => { return new UserController().update(req, res); });
//#endregion

// GET	/v1/me/following/contains	Check if Current User Follows Artists or Users	true/false
// GET	/v1/playlists/{playlist_id}/followers/contains	Check if Users Follow a Playlist	true/false
// PUT	/v1/me/following	Follow Artists or Users	-
// PUT	/v1/playlists/{playlist_id}/followers	Follow a Playlist	-
// GET	/v1/me/following?type=artist	Get User's Followed Artists	artists
// DELETE	/v1/me/following	Unfollow Artists or Users	-
// DELETE	/v1/playlists/{playlist_id}/followers	Unfollow a Playlist	-

module.exports = routes;