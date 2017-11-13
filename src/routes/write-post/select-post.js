var WritePostDao = require('../../dao/WritePostDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    writePostDao = new WritePostDao();
    co(function* () {
        var result = yield callBack => writePostDao.selectPostData(request.params.seq, callBack);
        result ? response.status(200).json(result) : response.sendStatus(400);
    });
};
