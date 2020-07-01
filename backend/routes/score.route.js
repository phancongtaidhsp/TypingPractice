const express = require('express');
const router = express.Router();
const controller = require('../controllers/score.controller')

router.post('/saveScore', controller.saveScore)

module.exports = router;