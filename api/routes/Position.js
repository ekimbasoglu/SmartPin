const express = require('express');
const router = express.Router();
const positionController = require('../controllers/Position');
const userLoggedIn = require('../middlewares/userLoggedIn');

// Positions
router.post('/create', userLoggedIn, positionController.create);
router.post('/delete', userLoggedIn, positionController.delete);

module.exports = router;
