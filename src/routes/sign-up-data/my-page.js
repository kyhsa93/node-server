var SignUpDao = require('../../dao/SignUpDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var signUpDao = new SignUpDao();
    co(function* () {
        var result = yield callBack => signUpDao.selectSingUpDataById(request.params.id, callBack);
        result ? response.status(200).json(result) : response.sendStatus(400);
    });
};
