const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de SHOP'));
router.get('/item/:id', (req, res) => res.send('Esta es la vista de ITEM SELECCIONADO'));
router.post('/item/:id/add', (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'));
router.get('/cart', (req, res) => res.send('Esta es la vista del CARRITO'));
router.post('/cart', (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM al CARRITO'));

module.exports = router;