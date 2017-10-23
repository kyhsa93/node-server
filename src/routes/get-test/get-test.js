var GetTestDao = require('../../dao/GetTestdao');
var co = require('../../util/co');

/**
 * @type {function} using for testing GET method
 * @param {Object} request http reqeust
 * @param {Object} respones http response
 */
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
