var PostTestDao = require('../../dao/PostTestDao');
var co = require('../../util/co');

/**
 * @type {function} using for testing POST method
 * @param {Object} request http request
 * @param {Object} response http response
 */
module.exports = (request, response) => {
    var postTestDao = new PostTestDao();
    var postData = [
        request.body.id,
        request.body.name
    ];
    co(function* () {
        var result = yield callBack => postTestDao.insertPostData(postData, callBack);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
};
