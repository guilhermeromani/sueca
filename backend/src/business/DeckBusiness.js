const
    BaseBusiness = require('./BaseBusiness'),
    UserBusiness = require('../business/UserBusiness'),
    CardBusiness = require('../business/CardBusiness'),
    DeckRepository = new (require('../repository/DeckRepository'));

class DeckBusiness extends BaseBusiness {

    constructor() {
        super(DeckRepository);
    }

    async create(deck, userId) {
        var newDeck = {};

        var userBusiness = new UserBusiness();
        var owner = await userBusiness.findById(userId);

        if (owner != null) {
            newDeck.name = deck.name;
            newDeck.public = deck.public;
            newDeck.description = deck.description;
            newDeck.owner_id = owner.id;

            var result = await super.create(newDeck);
            var owner = await userBusiness.addDeck(owner.id, result.id);

            return result;

        }
        return null;
    }

    async addCard(card, deckId) {
        var cardBusiness = new CardBusiness();
        var newCard = await cardBusiness.create(card);

        var currentdeck = await super.findById(deckId);
        currentdeck.card_ids.push(newCard.id);
        return super.update(deckId, currentdeck);
    }
}

module.exports = DeckBusiness;