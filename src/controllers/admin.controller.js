const path = require('path');
const { getAll, getOne, create, edit, deleteOne } = require('../models/product.model');
const { log } = require('console');

module.exports = {
    adminView: async (req, res) => {

        const data = await getAll();
        res.render(path.resolve(__dirname, '../views/admin/Administrador.ejs'), {
            title: "Admin",
            data
        });        
    },

    createView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "Crear Item"
    }),

    createItem: async (req, res) => {

        const product_schema = {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            img_front:'/product/'+req.files[0].filename,
            img_back: '/product/'+req.files[1].filename,
            category_id: Number(req.body.category_id),
            licence_id: Number(req.body.licence_id)
        }
        console.log(product_schema);
        await create([Object.values(product_schema)]);
        res.redirect('/admin');
    },

    editIdView: async (req, res) => {
        const { id } = req.params;
        const [product] = await getOne({ product_id: id});
        console.log(product);
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar Item",
            product

        })       
    },
    
    editItem: async (req, res) => {
        const {id} = req.params;

        const haveImages = req.files.length !== 0;
        const product_schema = haveImages
        ? {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            img_front:'/product/'+req.files[0].filename,
            img_back: '/product/'+req.files[1].filename,
            category_id: Number(req.body.category_id),
            licence_id: Number(req.body.licence_id)
        }
        : {
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            category_id: Number(req.body.category_id),
            licence_id: Number(req.body.licence_id)
        };

        await edit(product_schema, {product_id: id})
        res.redirect('/shop');
    },

    deleteItem: async (req, res) => {
        const {id} = req.params;
       
        await deleteOne({product_id: id});
        res.redirect('/admin');
    }
};