const express = require('express');
const router = express.Router();

const controller = require('../controllers/admin.controller');

router.get('/', controller.adminView);
router.get('/create', controller.createView);
router.post('/create', controller.addNewItem);
router.get('/edit/:id', controller.editIdView);
router.put('/edit/:id', controller.modfItem);
router.delete('/delete/:id', controller.deleteItem);

module.exports = router;