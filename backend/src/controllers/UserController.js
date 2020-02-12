const BaseController = require('./BaseController');

class UserController extends BaseController {

    constructor() {
        super("User");
    }
}

module.exports = UserController;