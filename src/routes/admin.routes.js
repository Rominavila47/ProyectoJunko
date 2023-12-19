const express = require('express');
const router = express.Router();

const controller = require('../controllers/admin.controller');

router.get('/', controller.getAdmin);
router.get('/create', controller.createItem);
router.post('/create', controller.addNewItem);
router.get('/edit/:id', controller.editNewItem);
router.put('/edit/:id', controller.modfItem);
router.delete('/delete/:id', controller.deleteItem);

module.exports = router;