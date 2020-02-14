const moongose = require('mongoose');
// const moongosePaginate = require('mongoose-paginate');
const File = require('./File');

const CardSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file: File
});

// CardSchema.plugin(moongosePaginate);

moongose.model("Card", CardSchema);