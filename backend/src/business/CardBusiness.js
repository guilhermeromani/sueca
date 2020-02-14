const
    BaseBusiness = require('./BaseBusiness'),
    CardRepository = new (require('../repository/CardRepository'));

class CardBusiness extends BaseBusiness {

    constructor() {
        super(CardRepository);
    }
}

module.exports = CardBusiness;