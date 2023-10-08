const express = require('express');
const router = express.Router();
const jobController = require('../controllers/Job');
const userLoggedIn = require('../middlewares/userLoggedIn');

// Jobs
router.post('/get', userLoggedIn, jobController.getAll);
router.post('/get/:company', userLoggedIn, jobController.get);
router.post('/create', userLoggedIn, jobController.create);
router.delete('/delete/:company', userLoggedIn, jobController.delete);

module.exports = router;
