var db = require('../config/db-connection');
var pool = db.connectionPool;

/**
 * @type {string} insert sign up data
 */
var INSERT_SIGN_UP_DATA_SQL = `INSERT INTO
    test.test
SET
    id = ?,
    password = password(?),
    name = ?,
    phone = ?`;

/**
 * @type {string} select sign up data
 */
var SELECT_SIGN_UP_DATA_BY_ID = `SELECT
    *
FROM
    test.test
WHERE
    id = ?`;

/**
 * @type {string} update sign up data
 */
var UPDATE_SIGN_UP_DATA_BY_ID = `UPDATE
    test.test
SET
    password = password(?),
    phone = ?
WHERE
    id = ?`;

var FIND_ACCOUNT_SQL = `SELECT
    *
FROM
    test.test
WHERE
    name = ?
AND
    phone = ?`;

module.exports = class SignUpDao {
    constructor () {}

    /**
     * @type {function}
     * @param {Array} signUpData [id, password, name, phone]
     * @param {function} callback
     */
    insertSignUpdata (signUpData, callback) {
        pool.query(INSERT_SIGN_UP_DATA_SQL, signUpData, (error, result) => {
            callback(result);
        });
    }

    /**
     * @type {function}
     * @param {string} id
     * @param {function} callBack
     */
    selectSignUpDataById (id, callBack) {
        pool.query(SELECT_SIGN_UP_DATA_BY_ID, id, (error, result) => {
            callBack(result);
        });
    }

    /**
     * @type {function}
     * @param {Array} updateData [password, phone, id]
     * @param {funtion} callBack 
     */
    updateSignUpDataById (updateData, callBack) {
        pool.query(UPDATE_SIGN_UP_DATA_BY_ID, updateData, (error, result) => {
            callBack(result);
        });
    }

    /**
     * @type {function}
     * @param {array} accountData [name, phone]
     * @param {function} callBack
     */
    findAccount (accountData, callBack) {
        pool.query(FIND_ACCOUNT_SQL, accountData, (error, result) => {
            callBack(result);
        });
    }
};
