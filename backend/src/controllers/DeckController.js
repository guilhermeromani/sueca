const
    BaseController = require('./BaseController'),
    DeckBusiness = new (require('../business/DeckBusiness')),
    UserBusiness = require('../business/UserBusiness'),
    CardBusiness = require('../business/CardBusiness');

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
        var newDeck = {};

        var userBusiness = new UserBusiness();
        var owner = await userBusiness.findById(req.params.user_id);

        if (owner != null) {
            newDeck.name = req.body.name;
            newDeck.public = req.body.public;
            newDeck.description = req.body.description;
            newDeck.owner_id = owner.id;

            var result = await DeckBusiness.create(newDeck);
            var owner = await userBusiness.addDeck(owner.id, result.id);

            return res.json(result);

        }
        return res.status(403);
    }

    /**
     * Get full details of the cards of a deck owned by an user.
     */
    async getCards(req, res) {
        var cardBusiness = new CardBusiness();
        var cards = [];

        var deck = DeckBusiness.findById(req.params.deck_id);
        deck.card_ids.forEach(element => {
            var card = cardBusiness.findById(element);
            if (card != null) cards.push(card);
        });

        return res.status(200).json(cards);
    }

    /**
     * Add one card to a user’s deck.
     * @param {Object} card - New card
     * @param {String} card.name - The name for the card
     * @param {String} card.description - Value for card description
     */
    async addCard(req, res) {
        var cardBusiness = new CardBusiness();
        var newCard = await cardBusiness.create(req.body);

        var deck = super.findById(req.params.deck_id);
        deck.card_ids.push(newCard.id);

        return res.status(201).send();
    }
}

module.exports = DeckController;