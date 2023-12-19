const express = require('express');
const router = express.Router();

const controller = require('../controllers/shop.controllers');

router.get('/', controller.getShop);
router.get('/item/:id', controller.getShopItem);
router.post('/item/:id/add', controller.addItem);
router.get('/cart', controller.car);
router.post('/cart', controller.addCar);

module.exports = router;