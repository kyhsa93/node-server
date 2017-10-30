var db = require('../config/db-connection');
var pool = db.connectionPool;

var INSERT_POST_SQL = `INSERT INTO
    test.contents
SET
    title = ?,
    category = ?,
    content = ?`;

module.exports = class WritePostDao {
    constructor () {}

    /**
     * @type {function}
     * @param {Array} postData
     * @param {function} callback
     */
    insertPostData(postData, callback) {
        pool.query(INSERT_POST_SQL, postData, (error, result) => {
            callback(result);
        });
    }
};
