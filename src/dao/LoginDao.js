var db = require('../config/db-connection');
var pool = db.connectionPool;

/**
 * @type {string} select data for login
 */
var SELECT_FOR_LOGIN_SQL = `SELECT
    *
FROM
    test.test
WHERE
    id = ?`;

module.exports = class LoginDao {
    constructor () {}

    /**
     * @type {function} select data for login
     * @param {Array<string>} loginData [loginId, loginPassword]
     * @param {function} callback
     */
    selectForLogin(loginData, callback) {
        pool.query(SELECT_FOR_LOGIN_SQL, loginData[0], (error, result) => {
            if (result.length) {
                if (result[0].password == loginData[1]) {
                    callback(result);
                } else {
                    callback(error);
                }
            } else {
                callback(error);
            }
        });
    }
};
