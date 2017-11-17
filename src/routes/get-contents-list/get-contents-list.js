var ContentListDao = require('../../dao/ContentsListDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var category = request.params.category;
    var contentListDao = new ContentListDao();
    co(function* () {
        var result = yield callBack => {
            contentListDao.selectContentList(category, callBack);
        };
        result ? response.status(200).json(result) : response.sendStatus(400);
    });
};
