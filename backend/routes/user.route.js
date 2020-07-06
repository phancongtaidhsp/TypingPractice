const express = require('express');
const router = express.Router();
const authUserMiddleware = require('../middlewares/auth-user.middleware')
const controller = require('../controllers/user.controller');

router.get('/getProfile', authUserMiddleware.requireAuth, controller.get);

router.put('/update' , authUserMiddleware.requireAuth, controller.update)

module.exports = router;