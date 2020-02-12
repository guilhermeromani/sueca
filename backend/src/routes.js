const express = require('express');
const routes = express.Router();

const CardController = new (require('./controllers/CardController'));
const UserController = new (require('./controllers/UserController'));

routes.get('/cards', CardController.list);
routes.get('/cards/:id', CardController.findById);
routes.post('/cards', CardController.create);
routes.put('/cards/:id', CardController.update);
routes.delete('/cards/:id', CardController.delete);

routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.findById);

// routes.get('/', (req, res) => {
//     res.send('Hello');
// });

module.exports = routes;