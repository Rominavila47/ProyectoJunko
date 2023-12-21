const path = require('path');
const { getAll, getOne } = require('../models/product.model');

module.exports = {
    adminView: async (req, res) => {

        const data = await getAll();
        res.render(path.resolve(__dirname, '../views/admin/Administrador.ejs'), {
            title: "Admin",
            data
        });        
    },
    createView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "Crear Item",
        });        
    },
    addNewItem:  (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),

    editIdView: async (req, res) => {
        const { id } = req.params;
        const [product] = await getOne({ product_id: id});

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar Item",
            product
        });        
    },
    modfItem: (req, res) => res.send('Esta es la ruta para MODIFICAR un ITEM'),
    deleteItem: (req, res) => res.send('Esta es la ruta para ELIMINAR un ITEM')
}