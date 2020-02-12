const mongoose = require('mongoose');

class BaseRepository {

    constructor(model) {
        this.model = mongoose.model(model);        
    }

    list() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }

    create(data) {
        return this.model.create(data);
    }

    update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    delete(id) {
        this.model.findByIdAndRemove(id);
    }
}

module.exports = BaseRepository;