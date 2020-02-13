const BaseController = require('./BaseController');
const UserBusiness = new (require('../business/UserBusiness'));

class UserController extends BaseController {

    constructor() {
        super(UserBusiness);
    }
}

module.exports = UserController;