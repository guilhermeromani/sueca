const
    BaseController = require('./BaseController'),
    FileBusiness = new (require('../business/FileBusiness'));

class FileController extends BaseController {

    constructor() {
        super(FileBusiness);
    }
}

module.exports = FileController;