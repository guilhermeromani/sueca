const BaseController = require('./BaseController');
const CardBusiness = new (require('../business/CardBusiness'));

class CardController extends BaseController {

    constructor() {
        super(CardBusiness);
    }
}

module.exports = CardController;