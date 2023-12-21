const path = require('path');
const { getAll, getOne, create } = require('../models/product.model');

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

    addNewItem: async (req, res) => {

        const product_schema = {
            product_name: req.body.name,
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front:'/product/'+req.files[0].filename,
            image_back: '/product/'+req.files[1].filename,
            category_id: Number(req.body.category_id),
            licence_id: Number(req.body.licence_id)
        }

        await create([Object.values(product_schema)]);
        res.redirect('/admin');
    },

    editIdView: async (req, res) => {
        const { id } = req.params;
        const [product] = await getOne({ product_id: id});

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar Item",
            product
        })       
    },
    
    modfItem: (req, res) => res.send('Esta es la ruta para MODIFICAR un ITEM'),
    deleteItem: (req, res) => res.send('Esta es la ruta para ELIMINAR un ITEM')
}