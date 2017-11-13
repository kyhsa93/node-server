var db = require('../config/db-connection');
var pool = db.connectionPool;

var INSERT_CONTENT_SQL = `INSERT INTO
    test.contents
SET
    title = ?,
    category = ?,
    content = ?,
    id = ?`;

var SELECT_CONTENT_SQL = `SELECT
    *
FROM
    test.contents
WHERE
    seq = ?`;

var UPDATE_CONTENT_SQL = `UPDATE
    test.contents
SET
    title = ?,
    category = ?,
    content = ?
WHERE
    seq = ?`;

module.exports = class WriteContentDao {
    constructor () {}

    /**
     * @type {function}
     * @param {Array} contentData
     * @param {function} callBack
     */
    insertContentData(contentData, callBack) {
        pool.query(INSERT_CONTENT_SQL, contentData, (error, result) => {
            callBack(result);
        });
    }

    /**
     * @type {function}
     * @param {number} seq
     * @param {function} callBack
     */
    selectContentData(seq, callBack) {
        pool.query(SELECT_CONTENT_SQL, seq, (error, result) => {
            callBack(result);
        });
    }

    /**
     * @type {function}
     * @param {array} contentData
     * @param {function} callBack
     */
    updateContentData(contentData, callBack) {
        pool.query(UPDATE_CONTENT_SQL, contentData, (error, result) => {
            callBack(result);
        });
    }
};
