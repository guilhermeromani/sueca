const
    BaseBusiness = require('./BaseBusiness'),
    FileRepository = new (require('../repository/FileRepository'));

class FileBusiness extends BaseBusiness {

    constructor() {
        super(FileRepository);
    }
}

module.exports = FileBusiness;