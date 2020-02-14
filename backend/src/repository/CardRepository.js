const BaseRepository = require('./BaseRepository');

class CardRepositoy extends BaseRepository {
    constructor() {
        super("Card");
    }
}

module.exports = CardRepositoy;