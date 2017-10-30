var GetPostListDao = require('../../dao/GetPostListDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var category = request.params.category;
    var getPostListDao = new GetPostListDao();
    co(function* () {
        var result = yield callBack => getPostListDao.selectPostList(category, callBack);
        result ? response.status(200).json(result) : response.sendStatus(400);
    });
};
