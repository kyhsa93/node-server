var SignUpDao = require('../../dao/SignUpDao');
var co = require('../../util/co');

/**
 * @type {function} insert sign up data
 * @param {Object} request http request
 * @param {Object} response http response
 */
module.exports = (request, response) => {
    var signUpDao = new SignUpDao();
    var signUpData = [
        request.body.id,
        request.body.password,
        request.body.name
    ];
    co(function* () {
        var result = yield callBack => signUpDao.insertSignUpdata(signUpData, callBack);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
};
