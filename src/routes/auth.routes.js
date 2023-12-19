const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controllers');

router.get('/login', controller.login);
router.post('/login', controller.login1);
router.get('/register', controller.register);
router.post('/register', controller.register1);
router.get('/logout', controller.logout);

module.exports = router;