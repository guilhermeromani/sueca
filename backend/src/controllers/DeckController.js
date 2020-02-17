const
    BaseController = require('./BaseController'),
    DeckBusiness = new (require('../business/DeckBusiness'));

class DeckController extends BaseController {

    constructor() {
        super(DeckBusiness);
    }

    /**
     * Create a deck for an user. (The deck will be empty until you add cards.)
     * @param {Object} deck 
     * @param {String} deck.name - The new name for the deck, for example "My New Deck Title".
     * @param {Boolean} deck.public - If true the deck will be public, if false it will be private.
     * @param {String} deck.description - Value for deck description
     */
    async create(req, res) {
        var result = DeckBusiness.create(req.body, req.params.user_id);
        if (result != null)
            return res.json(result);
        else
            return res.status(403).send();
    }

    /**
     * Add one card to a user’s deck.
     * @param {Object} card - New card
     * @param {String} card.name - The name for the card
     * @param {String} card.description - Value for card description
     */
    async addCard(req, res) {
        var result = DeckBusiness.addCard(req.body, req.params.deck_id);
        if (result != null)
            return res.status(200).send();
        else
            return res.status(403).send();
    }
}

module.exports = DeckController;