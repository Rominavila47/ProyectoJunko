const express = require('express');
const app = express();

/*Routes Imports*/
const mainRoutes = require('./src/routes/main.routes');
const authRoutes = require('./src/routes/auth.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');

const PORT = 3004;

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);


app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:${PORT}'));