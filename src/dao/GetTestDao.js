var db = require('../config/db-connection');
var pool = db.connectionPool;

/**
 * @type {string} using for testing GET method
 */
var SELECT_GET_DATA_TEST_SQL = `SELECT
    *
FROM
    test.test
WHERE
    seq = ?`;

module.exports = class GetTestDao {
    constructor() {

    }

    /**
     * @type {function} using for testing GET method
     * @param {number} getData index number for select database
     * @param {function} callback TODO for after query
     */
    selectGetData(getData, callback) {
        pool.query(SELECT_GET_DATA_TEST_SQL, getData, (error, result) => {
            callback(result);
        });
    }
};
