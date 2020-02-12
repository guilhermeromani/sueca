var _baseRepository;

class BaseBusiness {

    constructor(repositoryName) {
        _baseRepository = new (require('../repository/BaseRepository'))(repositoryName);
    }

    list() {
        return _baseRepository.list();
    }

    findById(id) {
        return _baseRepository.findById(id);
    }

    create(data) {
        return _baseRepository.create(data);
    }
    
    update(id, data) {
        return _baseRepository.update(id, data);
    }

    delete(id) {
        _baseRepository.delete(id);
    }
}

module.exports = BaseBusiness;