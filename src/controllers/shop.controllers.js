const path = require('path');

module.exports = {
    shopView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Tienda",
        });        
    },
    shopItemView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "Item",
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