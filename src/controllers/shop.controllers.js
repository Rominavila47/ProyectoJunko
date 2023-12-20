const path = require('path');
const { getAll, getOne } = require('../models/product.model');

module.exports = {
    shopView: async (req, res) => {

        const data = await getAll();
               
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Tienda",
            data
        });        
    },
    shopItemView: async (req, res) => {
        const itemId = req.params.id;
        const [item] = await getOne(itemId);
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "Item",
            item
        });        
    },
    addItem: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    carView: (req, res) =>  {
        res.render(path.resolve(__dirname, '../views/shop/car.ejs'), {
            title: "Carrito de compras",
        });        
    },
    addToCar: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM al CARRITO')
}