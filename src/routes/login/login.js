var LoginDao = require('../../dao/LoginDao');
var co = require('../../util/co');

/**
 * @type {function} using for login process
 * @param {Object} request http request
 * @param {Object} response http response
 */
module.exports = (request, response) => {
    var loginDao = new LoginDao();
    var loginData = [
        request.body.loginId,
        request.body.loginPassword
    ];

    co (function* () {
        var result = yield callback => loginDao.selectForLogin(loginData, callback);
        result ? response.sendStatus(200) : response.sendStatus(400);
    });
};
