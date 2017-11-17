var SignUpDao = require('../../dao/SignUpDao');
var co = require('../../util/co');

module.exports = (request, response) => {
    var signUpDao = new SignUpDao();
    co(function* () {
        var findAccountResult = yield callBack => {
            signUpDao.findAccount(request.body, callBack);
        };
        if (!findAccountResult) {
            response.sendStatus(400);
            return;
        }
        var updateData = [
            '0000',
            request.body[1],
            findAccountResult[0].id
        ];
        var updateResult = yield callBack => {
            signUpDao.updateSignUpDataById(updateData, callBack);
        };
        updateResult ?
            response.status(200).send({
                id: findAccountResult[0].id, 
                password: '0000'
            }) : response.sendStatus(400);
    });
};
