const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Esta es la vista de LOGIN'));
router.post('/login', (req, res) => res.send('Esta es la ruta que VALIDA los datos del LOGIN'));
router.get('/register', (req, res) => res.send('Esta es la vista de RGISTER'));
router.post('/register', (req, res) => res.send('Esta es la ruta que CREA un NUEVO USUARIO'));
router.get('/logout', (req, res) => res.send('Esta ruta CIERRA SESION'));

module.exports = router;