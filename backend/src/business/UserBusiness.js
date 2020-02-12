const BaseBusiness = require('./BaseBusiness');

class UserBusiness extends BaseBusiness {

    constructor() {
        super("User");
    }

    list() {
        console.log('Vou listar todos os usuarios');
        return super.list();
    }
}

module.exports = UserBusiness;