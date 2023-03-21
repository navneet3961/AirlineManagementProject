class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Something wrong with create in CRUD repository");
        }
    }

    async destroy(modelId) {
        try {
            const result = await this.repository.destroy(modelId);
            return result;
        } catch (error) {
            console.log("Something wrong with delete in CRUD repository");
        }
    }

    async get(modelId) {
        try {
            const result = await this.repository.get(modelId);
            return result;
        } catch (error) {
            console.log("Something wrong with get in CRUD repository");
        }
    }

    async getAll(data) {
        try {
            const result = await this.repository.getAll(data);
            return result;
        } catch (error) {
            console.log("Something wrong with getAll in CRUD repository");
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.repository.update(modelId, data);
            return result;
        } catch (error) {
            console.log("Something wrong with update in CRUD repository");
        }
    }
}

module.exports = CrudService;