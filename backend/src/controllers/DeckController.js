const
    BaseController = require('./BaseController'),
    DeckBusiness = new (require('../business/DeckBusiness'));

class DeckController extends BaseController {

    constructor() {
        super(DeckBusiness);
    }
}

module.exports = DeckController;