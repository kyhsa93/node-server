var db = require('../config/db-connection');
var pool = db.connectionPool;

/**
 * @type {string} insert sign up data
 */
var INSERT_SIGN_UP_DATA_SQL = `INSERT INTO
    test.test
SET
    id = ?,
    name = ?,
    password = ?`;

module.exports = class SignUpDao {
    constructor () {}

    /**
     * @type {function} insert sign up data
     * @param {Array} signUpData sign up data
     * @param {function} callback
     */
    insertSignUpdata (signUpData, callback) {
        pool.query(INSERT_SIGN_UP_DATA_SQL, signUpData, (error, result) => {
            callback(result);
        });
    }
};
