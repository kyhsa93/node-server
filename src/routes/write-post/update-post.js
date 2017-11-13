var WritePostDao = require('../../dao/WritePostDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var writePostDao = new WritePostDao();
    var postData = [
        request.body[0],
        request.body[1],
        request.body[2],
        request.body[3]
    ];
    co(function* () {
        var result = yield callBack => writePostDao.updatePostData(postData, callBack);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
};
