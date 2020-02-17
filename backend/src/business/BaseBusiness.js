var _baseRepository;

class BaseBusiness {

    constructor(instance) {
        this._baseRepository = instance;
    }

    list() {
        return this._baseRepository.list();
    }

    findById(id) {
        return this._baseRepository.findById(id);
    }

    create(data) {
        return this._baseRepository.create(data);
    }
    
    update(id, data) {
        return this._baseRepository.update(id, data);
    }

    delete(id) {
        this._baseRepository.delete(id);
    }
}

module.exports = BaseBusiness;