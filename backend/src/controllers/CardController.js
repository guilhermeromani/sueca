const
    BaseController = require('./BaseController'),
    CardBusiness = new (require('../business/CardBusiness'),
    DeckBusiness = require('../business/DeckBusiness'));

class CardController extends BaseController {

    constructor() {
        super(CardBusiness);
    }

    /**
     * Get full details of the cards of a deck owned by an user.
     */
    async getCards(req, res) {
        var deckBusiness = new DeckBusiness();
        var cards = [];

        var deck = await deckBusiness.findById(req.params.deck_id);
        deck.card_ids.forEach(element => {
            var card = CardBusiness.findById(element);
            if (card != null) cards.push(card);
        });

        return res.status(200).json(cards);
    }
}

module.exports = CardController;