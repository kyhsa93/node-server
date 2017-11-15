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
        var selectResult = yield callBack => {
            signUpDao.selectSignUpDataById(signUpData[0], callBack);
        };
        if (selectResult.length == 0) {
            var insertResult = yield callBack => {
                signUpDao.insertSignUpdata(signUpData, callBack);
            };
            insertResult ?
                response.status(200).send('success') :
                response.status(400).send('fail');
            return;
        }
        response.status(400).send('existed');
    });
};
