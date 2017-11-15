var GetContentListDao = require('../../dao/GetContentsListDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var category = request.params.category;
    var getContentListDao = new GetContentListDao();
    co(function* () {
        var result = yield callBack => getContentListDao.selectContentList(category, callBack);
        result ? response.status(200).json(result) : response.sendStatus(400);
    });
};
