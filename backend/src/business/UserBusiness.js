const
    BaseBusiness = require('./BaseBusiness'),
    UserRepository = new (require('../repository/UserRepository'));

class UserBusiness extends BaseBusiness {

    constructor() {
        super(UserRepository);
    }

    list() {
        console.log('Vou listar todos os usuarios');
        return super.list();
    }
}

module.exports = UserBusiness;