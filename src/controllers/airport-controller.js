const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const city = await airportService.create(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not created a airport',
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not deleted a airport',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const city = await airportService.update(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully updated a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not updated a airport',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const city = await airportService.get(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully got a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not got a airport',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await airportService.getAll(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully got all airports',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not got any airport',
            err: error
        });
    }
}

module.exports =
{
    create,
    destroy,
    update,
    get,
    getAll
}