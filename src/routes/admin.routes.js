const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFile');

const {adminView,
    createView,
    addNewItem,
    editIdView,
    modfItem,
    deleteItem
} = require('../controllers/admin.controller');



router.get('/', adminView);
router.get('/create', createView);
router.post('/create', upload.array('images', 2), addNewItem);
router.get('/edit/:id', editIdView);
router.put('/edit/:id', modfItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;