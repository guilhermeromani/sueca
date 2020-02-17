const moongose = require('mongoose');
const User = require('./User');
const Image = require('./Image');

const DeckSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    public: {
        type: Boolean,
        default: true
    },
    owner_id: {
        type: moongose.Schema.Types.ObjectId,
        required: true
    },
    description: String,
    card_ids: [],
    image: Image
});

moongose.model("Deck", DeckSchema);