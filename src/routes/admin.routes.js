const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de ADMIN'));
router.get('/create', (req, res) => res.send('Esta es la vista de CREAR NUEVO ITEM'));
router.post('/create', (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'));
router.get('/edit/:id', (req, res) => res.send('Esta es la vista de EDITAR un ITEM ESPECIFICO'));
router.put('/edit/:id', (req, res) => res.send('Esta es la ruta para MODIFICAR un ITEM'));
router.delete('/delete/:id', (req, res) => res.send('Esta es la ruta para ELIMINAR un ITEM'));

module.exports = router;