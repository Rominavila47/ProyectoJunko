const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBSCHEMA,
    connectionLimit: 10,
    waitForConnection: true,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if (err) {
        console.log('Hubo un error al conectarse a la bd:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
};