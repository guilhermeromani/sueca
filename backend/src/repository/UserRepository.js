const BaseRepository = require('./BaseRepository');

class UserRepositoy extends BaseRepository {
    constructor() {
        super("User");
    }
}

module.exports = UserRepositoy;