const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    }
});

moongose.model("User", UserSchema);