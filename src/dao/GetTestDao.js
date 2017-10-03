var db = require('../config/db-connection');
var pool = db.connectionPool;

var SELECT_GET_DATA_TEST_SQL = `SELECT
    *
FROM
    test.test
WHERE
    seq = ?`;

module.exports = class GetTestDao {
    constructor() {

    }

    selectGetData(getData, callback) {
        pool.query(SELECT_GET_DATA_TEST_SQL, getData, (error, result) => {
            callback(result);
        });
    }
};
