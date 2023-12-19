module.exports = {
    getShop: (req, res) => res.send('Esta es la vista de SHOP'),
    getShopItem: (req, res) => res.send('Esta es la vista de ITEM SELECCIONADO'),
    addItem: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    car: (req, res) => res.send('Esta es la vista del CARRITO'),
    addCar: (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM al CARRITO')
}