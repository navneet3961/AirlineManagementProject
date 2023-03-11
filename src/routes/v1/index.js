const express = require('express');
const cityController = require('../../controllers/city-controller');
const router = express.Router();


router.post('/city', cityController.create);
router.delete('/city', cityController.destroy);
router.patch('/city', cityController.update);
router.get('/city', cityController.get);

module.exports = router;
