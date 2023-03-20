const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const router = express.Router();

// API for cities
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);

// API for flights
router.post('/flight', FlightController.create);
router.get('/flight/:id', FlightController.get);
router.get('/flight', FlightController.getAll);

module.exports = router;
