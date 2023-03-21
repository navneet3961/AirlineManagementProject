class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something wrong with create in CRUD repository");
        }
    }

    async destroy(modelId) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("Something wrong with delete in CRUD repository");
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something wrong with get in CRUD repository");
        }
    }

    async getAll(data) {
        try {
            const result = await this.model.findAll(data);
            return result;
        } catch (error) {
            console.log("Something wrong with getAll in CRUD repository");
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("Something wrong with update in CRUD repository");
        }
    }
}

module.exports = CrudRepository;