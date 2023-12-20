const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controllers');

router.get('/login', controller.loginView);
router.post('/login', controller.loginValidate);
router.get('/register', controller.registerView);
router.post('/register', controller.registerNew);
router.get('/logout', controller.logout);

module.exports = router;