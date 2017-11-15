var WriteContentDao = require('../../dao/WriteContentDao');
var co = require('../../util/co');

/**
 * @type {function}
 * @param {Object} request http request
 * @param {Object} response http response
 */
module.exports = (request, response) => {
    var writeContentDao = new WriteContentDao();
    var contentData = [
        request.body[0],
        request.body[1],
        request.body[2],
        request.body[3]
    ];
    co(function* () {
        var result = yield callback => writeContentDao.insertContentData(contentData, callback);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
};
