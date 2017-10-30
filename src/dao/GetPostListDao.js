var db = require('../config/db-connection');
var pool = db.connectionPool;


/**
 * @type {string}
 */
var SELECT_POST_LIST_SQL = `SELECT
    *
FROM
    test.contents
WHERE
    category = ?`;

var SELECT_POST_LIST_HOME_SQL = `SELECT
    *
FROM
    test.contents`;

module.exports = class GetPostListDao {
    constructor () {}

    /**
     * @type {function}
     * @param {string} category page name
     * @param {function} callBack
     */
    selectPostList (category, callBack) {
        if (category != 'home') {
            pool.query(SELECT_POST_LIST_SQL, category, (error, result) => {
                callBack(result);
            });
        } else {
            pool.query(SELECT_POST_LIST_HOME_SQL, category, (error, result) => {
                callBack(result);
            });
        }
    }
};
