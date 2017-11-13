var WritePostDao = require('../../dao/WritePostDao');
var co = require('../../util/co');

/**
 * @type {function}
 * @param {Object} request http request
 * @param {Object} response http response
 */
module.exports = (request, response) => {
    var writePostDao = new WritePostDao();
    var postData = [
        request.body[0],
        request.body[1],
        request.body[2],
        request.body[3]
    ];
    co(function* () {
        var result = yield callback => writePostDao.insertPostData(postData, callback);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
};
