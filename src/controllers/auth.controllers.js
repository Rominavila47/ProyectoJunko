module.exports = {
    login: (req, res) => res.send('Esta es la vista de LOGIN'),
    login1: (req, res) => res.send('Esta es la ruta que VALIDA los datos del LOGIN'),
    register: (req, res) => res.send('Esta es la vista de RGISTER'),
    register1: (req, res) => res.send('Esta es la ruta que CREA un NUEVO USUARIO'),
    logout: (req, res) => res.send('Esta ruta CIERRA SESION')
}