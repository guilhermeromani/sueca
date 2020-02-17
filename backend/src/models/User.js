const moongose = require('mongoose');
// const moongosePaginate = require('mongoose-paginate');
const Image = require('./Image');

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
    deck_ids: [],
    image: Image
});

// UserSchema.plugin(moongosePaginate);

moongose.model("User", UserSchema);