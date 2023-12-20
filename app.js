const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
/*
const {initSession} = require('./src/util/sessions');
requiere('dotenv').config();*/

/*Routes Imports*/
const mainRoutes = require('./src/routes/main.routes');
const authRoutes = require('./src/routes/auth.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');

const PORT = process.env.PORT || 3004;

 /* Define carpeta de archivos estáticos */
 app.use(express.static('public'));

/* Configuración del template Engine - EJS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

/*Parsea los datos recibidos por Post */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Override para habilitar métodos Put y Delete */
app.use(methodOverride('_method'));

/* Rutas de la aplicación */
app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);


app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:${PORT}'));