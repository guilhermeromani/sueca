const moongose = require('mongoose');

const CardSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

moongose.model("Card", CardSchema);