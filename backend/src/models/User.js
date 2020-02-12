const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

moongose.model("User", UserSchema);