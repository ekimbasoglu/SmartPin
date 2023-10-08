const express = require('express');
const router = express.Router();
const pomodoroController = require('../controllers/Pomodoro');
const userLoggedIn = require('../middlewares/userLoggedIn');

// Pomodoro
router.get('/get', userLoggedIn, pomodoroController.getAll);
router.post('/satus', userLoggedIn, pomodoroController.start);
router.post('/finem', userLoggedIn, pomodoroController.finish);

module.exports = router;
