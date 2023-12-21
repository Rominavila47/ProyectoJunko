const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFile');

const {adminView,
    createView,
    createItem,
    editIdView,
    editItem,
    deleteItem
} = require('../controllers/admin.controller');

/*const isLogged = (req, res, next) => {
    if (req.session)
}*/

router.get('/', adminView);
router.get('/create', createView);
router.post('/create', upload.array('images', 2), createItem);
router.get('/edit/:id', editIdView);
router.put('/edit/:id', upload.array('images', 2), editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;