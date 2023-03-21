const express = require('express');

// Controllers
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

// Middlewares
const { FlightMiddlewares } = require("../../middlewares/index");

const router = express.Router();

// API for cities
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);

// API for flights
router.post('/flight', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flight/:id', FlightController.get);
router.get('/flight', FlightController.getAll);

// API for airports
router.post('/airport', AirportController.create);
router.get('/airport/:id', AirportController.get);
router.get('/airport', AirportController.getAll);

module.exports = router;
