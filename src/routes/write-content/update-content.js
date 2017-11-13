var WriteContentDao = require('../../dao/WriteContentDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var writeContentDao = new WriteContentDao();
    var contentData = [
        request.body[0],
        request.body[1],
        request.body[2],
        request.body[3]
    ];
    co(function* () {
        var result = yield callBack => writeContentDao.updateContentData(contentData, callBack);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
};
