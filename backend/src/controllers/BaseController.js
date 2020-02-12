var _baseBusiness;

class BaseController {

    constructor(controllerName) {
        _baseBusiness = new (require('../business/BaseBusiness'))(controllerName);
    }
    
    async list(req, res) {
        const result = await _baseBusiness.list();
        return res.json(result);
    }

    async findById(req, res) {
        const result = await _baseBusiness.findById(req.params.id);
        return res.json(result);
    }
    
    async create(req, res) {
        const result = await _baseBusiness.create(req.body);
        return res.json(result);
    }

    async update(req, res) {
        const result = await _baseBusiness.update(req.params.id, req.body);
        return res.json(result);
    }

    async delete(req, res) {
        await _baseBusiness.delete(req.params.id);
        return res.send();
    }
}

module.exports = BaseController;