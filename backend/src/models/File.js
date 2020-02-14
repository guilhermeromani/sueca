const moongose = require('mongoose');

const FileSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: Number,
    extension: String
});

moongose.model("File", FileSchema);