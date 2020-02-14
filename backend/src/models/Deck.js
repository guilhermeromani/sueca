const moongose = require('mongoose');
const Card = require('./Card');
const User = require('./User');
const File = require('./File');

const DeckSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    public: {
        type: Boolean,
        default: true
    },
    owner: {
        type: User,
        required: true
    },
    description: String,
    card_ids: [Card],
    file: File
});

moongose.model("Deck", DeckSchema);