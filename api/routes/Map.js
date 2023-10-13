const express = require('express');
const router = express.Router();
const mapController = require('../controllers/Map');

// Jobs
router.get('/get', mapController.getMaps); // [...all]
router.get('/get/:propertyId', mapController.getMap); // [map]
router.post('/add', mapController.addMap);    // => [map]
router.delete('/delete/:propertyId', mapController.deleteMap); // => [map]

module.exports = router;
