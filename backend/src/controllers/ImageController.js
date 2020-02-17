const
    BaseController = require('./BaseController'),
    ImageBusiness = new (require('../business/ImageBusiness'));

class ImageController extends BaseController {

    constructor() {
        super(ImageBusiness);
    }
}

module.exports = ImageController;