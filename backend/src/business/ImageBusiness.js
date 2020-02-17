const
    BaseBusiness = require('./BaseBusiness'),
    ImageRepository = new (require('../repository/ImageRepository'));

class ImageBusiness extends BaseBusiness {

    constructor() {
        super(ImageRepository);
    }
}

module.exports = ImageBusiness;