var SignUpDao = require('../../dao/SignUpDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var signUpDao = new SignUpDao();
    co(function* () {
        var result = yield callBack => signUpDao.updateSignUpDataById(request.body, callBack);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
;
}