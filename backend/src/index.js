const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect("mongodb://localhost:27017/sueca", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir("./models");

app.get('/', (req, res) => {

    res.send('Hello');
});

app.listen(3001);