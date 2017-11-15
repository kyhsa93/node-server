var WriteContentDao = require('../../dao/WriteContentDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    writeContentDao = new WriteContentDao();
    co(function* () {
        var result = yield callBack => writeContentDao.selectContentData(request.params.seq, callBack);
        result ? response.status(200).json(result) : response.sendStatus(400);
    });
};
