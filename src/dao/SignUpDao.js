var db = require('../config/db-connection');
var pool = db.connectionPool;

/**
 * @type {string} insert sign up data
 */
var INSERT_SIGN_UP_DATA_SQL = `INSERT INTO
    test.test
SET
    id = ?,
    password = ?,
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
    password = ?
WHERE
    id = ?`;

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

    /**
     * @type {function} select sign up data
     * @param {string} id userid
     * @param {function} callBack
     */
    selectSignUpDataById (id, callBack) {
        pool.query(SELECT_SIGN_UP_DATA_BY_ID, id, (error, result) => {
            callBack(result);
        });
    }

    /**
     * @type {function} update sign up data
     * @param {Array} updateData 
     * @param {funtion} callBack 
     */
    updateSignUpDataById (updateData, callBack) {
        pool.query(UPDATE_SIGN_UP_DATA_BY_ID, updateData, (error, result) => {
            callBack(result);
        });
    }
};
