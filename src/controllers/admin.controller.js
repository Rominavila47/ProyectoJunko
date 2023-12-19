module.exports = {
    getAdmin: (req, res) => res.send('Esta es la vista de ADMIN'),
    createItem: (req, res) => res.send('Esta es la vista de CREAR NUEVO ITEM'),
    addNewItem:  (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    editNewItem: (req, res) => res.send('Esta es la vista de EDITAR un ITEM ESPECIFICO'),
    modfItem: (req, res) => res.send('Esta es la ruta para MODIFICAR un ITEM'),
    deleteItem: (req, res) => res.send('Esta es la ruta para ELIMINAR un ITEM')
}