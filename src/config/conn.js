const mysql = require('mysql2');

const pool = mysql.createPool({
    user: 'root',
    password: 'Roma2020',
    host: 'localhost',
    port: 3306,
    database: 'funko_schema',
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