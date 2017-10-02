var db = require('../config/db-connection');
var pool = db.connectionPool;

var INSERT_POST_DATA_SQL = `INSERT INTO
    test.test
SET
    id = ?,
    name = ?`;

module.exports = class PostTestDao {
    constructor () {

    }

    insertPostData(postData, callback) {
        pool.query(INSERT_POST_DATA_SQL, postData, (error, result) => {
            callback(result);
        });
    }
};
