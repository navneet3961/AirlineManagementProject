const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
    #filterData(data) {
        let filteredData = {}

        if (data.arrivalAirportId) {
            filteredData.arrivalAirportId = data.arrivalAirportId;
        }

        if (data.departureAirportId) {
            filteredData.departureAirportId = data.departureAirportId;
        }

        if (data.minPrice && data.maxPrice) {
            Object.assign(filteredData, {
                price: {
                    [Op.and]: [
                        { [Op.gte]: data.minPrice },
                        { [Op.lte]: data.maxPrice }
                    ]
                }
            });

        }
        else if (data.maxPrice) {
            Object.assign(filteredData, { price: { [Op.lte]: data.maxPrice } });
        }
        else if (data.minPrice) {
            Object.assign(filteredData, { price: { [Op.gte]: data.minPrice } });
        }

        return filteredData;
    }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        }
        catch (error) {
            console.log("Something wrong with createFlight in Flight Repository.");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);

            if (!flight) {
                throw { err: "Not found any flight with corresponding id" };
            }
            return flight;
        }
        catch (error) {
            console.log("Something wrong with getFlight in Flight Repository.");
            throw { error };
        }
    }

    async getFlights(data) {
        try {
            const filteredData = this.#filterData(data);
            const flight = await Flight.findAll({ where: filteredData });
            return flight;
        }
        catch (error) {
            console.log("Something wrong with getFlights in Flight Repository.");
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {
            const flight = await Flight.update(data, {
                where: {
                    id: flightId
                }
            });
            return flight;
        }
        catch (error) {
            console.log("Something wrong with update in Flight Repository.");
            throw { error };
        }
    }
}

module.exports = FlightRepository;