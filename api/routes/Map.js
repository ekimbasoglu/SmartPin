const express = require('express');
const router = express.Router();
const mapController = require('../controllers/Map');

// Jobs
router.get('/get', mapController.getMaps); // [...all]
router.get('/get/:id', mapController.getMap); // [map]
router.post('/add', mapController.addMap);    // => [map]

module.exports = router;