const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not created a flight',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully got a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not got any flight',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flight = await flightService.getFlights(req.query);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully got flights',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not got any flight',
            err: error
        });
    }
}

module.exports =
{
    create,
    get,
    getAll
    // destroy,
    // update,
    // get,
    // getAll
}