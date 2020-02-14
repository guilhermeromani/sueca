class BaseController {

    constructor(instance) {
        this._baseBusiness = instance;
    }

    async list(req, res) {
        // const { page = 1 } = req.query;
        const result = await this._baseBusiness.list();
        return res.json(result);
    }

    async findById(req, res) {
        const result = await this._baseBusiness.findById(req.params.id);
        return res.json(result);
    }

    async create(req, res) {
        const result = await this._baseBusiness.create(req.body);
        return res.json(result);
    }

    async update(req, res) {
        const result = await this._baseBusiness.update(req.params.id, req.body);
        return res.json(result);
    }

    async delete(req, res) {
        await this._baseBusiness.delete(req.params.id);
        return res.send();
    }
}

module.exports = BaseController;