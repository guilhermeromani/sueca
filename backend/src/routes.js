const express = require('express');
const routes = express.Router();

const CardController = require('./controllers/CardController');

routes.get('/cards', CardController.index);

// routes.get('/', (req, res) => {
//     res.send('Hello');
// });

module.exports = routes;