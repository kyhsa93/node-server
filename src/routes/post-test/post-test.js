var PostTestDao = require('../../dao/PostTestDao');
var co = require('../../util/co');

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
