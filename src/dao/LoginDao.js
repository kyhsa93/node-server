var db = require('../config/db-connection');
var pool = db.connectionPool;

/**
 * @type {string}
 */
var SELECT_FOR_LOGIN_SQL = `SELECT
    *
FROM
    test.test
WHERE
    id = ?
AND
    password = password(?)`;

module.exports = class LoginDao {
    constructor () {}

    /**
     * @type {function}
     * @param {Array<string>} loginData [loginId, loginPassword]
     * @param {function} callBack
     */
    selectForLogin(loginData, callBack) {
        pool.query(SELECT_FOR_LOGIN_SQL, loginData, (error, result) => {
            result.length ? callBack(result) : callBack(error);
        });
    }
};
