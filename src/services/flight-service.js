const { FlightRepository } = require("../repository/index");
const { AirplaneRepository } = require("../repository/index");
const Helper = require("../utils/helper");

const flightrepository = new FlightRepository();

class FlightService {
    #filterCreateDate(data) {
        let newData = {};

        if (data.flightNumber)
            newData.flightNumber = data.flightNumber;
        if (data.airplaneId)
            newData.airplaneId = data.airplaneId;
        if (
            data.departureAirportId)
            newData.departureAirportId = data.departureAirportId;
        if (
            data.arrivalAirportId)
            newData.arrivalAirportId = data.arrivalAirportId;
        if (
            data.departureTime)
            newData.departureTime = data.departureTime;
        if (
            data.arrivalTime)
            newData.arrivalTime = data.arrivalTime;
        if (
            data.price)
            newData.price = data.price;

        return newData;
    }

    async createFlight(data) {
        try {
            if (Helper.compareTime(data.arrivalTime, data.departureTime)) {
                throw "Arrival Time cannot be greater than Departure Time";
            }
            const airplaneRepository = new AirplaneRepository();
            const airplane = await airplaneRepository.getAirplane(data.airplaneId);

            data = this.#filterCreateDate(data);
            data = { ...data, "totalSeats": airplane.capacity };
            const flight = await flightrepository.createFlight(data);
            return flight;
        }
        catch (error) {
            console.log("Something wrong with createFlight in Flight Service.");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await flightrepository.getFlight(flightId);
            return flight;
        }
        catch (error) {
            console.log("Something wrong with getFlight in Flight Service.");
            throw { error };
        }
    }

    async getFlights(data) {
        try {
            const flight = await flightrepository.getFlights(data);
            return flight;
        }
        catch (error) {
            console.log("Something wrong with getFlights in Flight Service.");
            throw { error };
        }
    }


}

module.exports = FlightService;

/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * boardingGate
 * totalSeats
 */