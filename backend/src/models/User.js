const moongose = require('mongoose');
// const moongosePaginate = require('mongoose-paginate');
const File = require('./File');
const Deck = require('./Deck');

const UserSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    deck_ids: [Deck],
    file: File
});

// UserSchema.plugin(moongosePaginate);

moongose.model("User", UserSchema);