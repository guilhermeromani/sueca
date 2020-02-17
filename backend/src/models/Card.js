const moongose = require('mongoose');
// const moongosePaginate = require('mongoose-paginate');
const Image = require('./Image');

const CardSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: Image
});

// CardSchema.plugin(moongosePaginate);

moongose.model("Card", CardSchema);