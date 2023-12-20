const path = require('path');

module.exports = {
    loginView: (req, res) =>  {
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
            title: "Ingresar",
        });        
    },
    loginValidate: (req, res) => res.send('Esta es la ruta que VALIDA los datos del LOGIN'),
    registerView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
            title: "Registrar Usuario",
        });        
    },
    registerNew: (req, res) => res.send('Esta es la ruta que CREA un NUEVO USUARIO'),
    logout: (req, res) => res.send('Esta ruta CIERRA SESION')
}