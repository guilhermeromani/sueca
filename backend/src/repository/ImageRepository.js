const BaseRepository = require('./BaseRepository');

class ImageRepositoy extends BaseRepository {
    constructor() {
        super("Image");
    }
}

module.exports = ImageRepositoy;