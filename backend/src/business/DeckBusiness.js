const
    BaseBusiness = require('./BaseBusiness'),
    DeckRepository = new (require('../repository/DeckRepository'));

class DeckBusiness extends BaseBusiness {

    constructor() {
        super(DeckRepository);
    }
}

module.exports = DeckBusiness;