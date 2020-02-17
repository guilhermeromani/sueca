const
    BaseBusiness = require('./BaseBusiness'),
    UserRepository = new (require('../repository/UserRepository'));

class UserBusiness extends BaseBusiness {

    constructor() {
        super(UserRepository);
    }

    async addDeck(userId, deckId) {
        var currentUser = await super.findById(userId);
        currentUser.deck_ids.push(deckId);
        return super.update(userId, currentUser);
    }
}

module.exports = UserBusiness;