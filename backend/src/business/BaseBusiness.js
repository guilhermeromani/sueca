var _baseRepository;

class BaseBusiness {

    constructor(instance) {
        this._baseRepository = instance;
    }

    showText() {
        console.log("Essa é a BASE BUSINESS");
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