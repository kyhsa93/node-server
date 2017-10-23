var mysql = require('mysql');

/**
 * DB info for connection
 */
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'aktdltsmsalRl'
});


/**
 * DB connection information
 */
module.exports = {
    connectionPool: pool
};
