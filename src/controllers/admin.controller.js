const path = require('path');

module.exports = {
    adminView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/Administrador.ejs'), {
            title: "Admin",
        });        
    },
    createView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "Crear Item",
        });        
    },
    addNewItem:  (req, res) => res.send('Esta es la ruta para AGREGAR un NUEVO ITEM'),
    editIdView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar Item",
        });        
    },
    modfItem: (req, res) => res.send('Esta es la ruta para MODIFICAR un ITEM'),
    deleteItem: (req, res) => res.send('Esta es la ruta para ELIMINAR un ITEM')
}