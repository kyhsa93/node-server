var db = require('../config/db-connection');
var pool = db.connectionPool;

/**
 * @type {string} using for testing POST method
 */
var INSERT_POST_DATA_SQL = `INSERT INTO
    test.test
SET
    id = ?,
    name = ?`;

module.exports = class PostTestDao {
    constructor () {

    }

    /**
     * @type {function} using for testing POST method
     * @param {Array} postData data for insert to database
     * @param {function} callback TODO for after query
     */
    insertPostData(postData, callback) {
        pool.query(INSERT_POST_DATA_SQL, postData, (error, result) => {
            callback(result);
        });
    }
};
