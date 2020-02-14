const BaseRepository = require('./BaseRepository');

class DeckRepositoy extends BaseRepository {
    constructor() {
        super("Deck");
    }
}

module.exports = DeckRepositoy;