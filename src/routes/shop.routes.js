const express = require('express');
const router = express.Router();

const controller = require('../controllers/shop.controllers');

router.get('/', controller.shopView);
router.get('/item/:id', controller.shopItemView);
router.post('/item/:id/add', controller.addItem);
router.get('/cart', controller.carView);
router.post('/cart', controller.addToCar);

module.exports = router;