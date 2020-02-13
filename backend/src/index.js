const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
require('dotenv/config');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION + "/" + process.env.DATABASE_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir("./models");

app.use('/api', require('./routes'));

app.listen(3001);