const BaseRepository = require('./BaseRepository');

class FileRepositoy extends BaseRepository {
    constructor() {
        super("File");
    }
}

module.exports = FileRepositoy;