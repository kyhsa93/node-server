var GetTestDao = require('../../dao/GetTestdao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var getData = request.params.getData;
    var getTestDao = new GetTestDao();
    co(function* () {
        var result = yield (callback) => {
            getTestDao.selectGetData(getData, callback);
        };
        result ? response.status(200).json(result) : response.sendStatus(400);
    });
};
