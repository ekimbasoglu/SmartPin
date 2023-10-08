const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const userLoggedIn = require('../middlewares/userLoggedIn');

// To Auth to get token
router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/secure', userController.getToken);
router.post('/contact', userController.contact);

module.exports = router;
