const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.log("Something wrong with createCity in City Repository.");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });

            return true;
        }
        catch (error) {
            console.log("Something wrong with deleteCity in City Repository.");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });

            return city;
        }
        catch (error) {
            console.log("Something wrong with updateCity in City Repository.");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch (error) {
            console.log("Something wrong with getCity in City Repository.");
            throw { error };
        }
    }
}

module.exports = CityRepository;