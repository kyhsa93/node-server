var db = require('../config/db-connection');
var pool = db.connectionPool;

var INSERT_POST_SQL = `INSERT INTO
    test.contents
SET
    title = ?,
    category = ?,
    content = ?`;

var SELECT_POST_SQL = `SELECT
    *
FROM
    test.contents
WHERE
    seq = ?`;

var UPDATE_POST_SQL = `UPDATE
    test.contents
SET
    title = ?,
    category = ?,
    content = ?
WHERE
    seq = ?`;

module.exports = class WritePostDao {
    constructor () {}

    /**
     * @type {function}
     * @param {Array} postData
     * @param {function} callBack
     */
    insertPostData(postData, callBack) {
        pool.query(INSERT_POST_SQL, postData, (error, result) => {
            callBack(result);
        });
    }

    /**
     * @type {function}
     * @param {number} seq
     * @param {function} callBack
     */
    selectPostData(seq, callBack) {
        pool.query(SELECT_POST_SQL, seq, (error, result) => {
            callBack(result);
        });
    }

    /**
     * @type {function}
     * @param {array} postData
     * @param {function} callBack
     */
    updatePostData(postData, callBack) {
        pool.query(UPDATE_POST_SQL, postData, (error, result) => {
            callBack(result);
        });
    }
};
