module.exports = (request, response) => {
    console.log('POST DATA : ', request.body);
    var result = request.body;
    result ? response.sendStatus(200) : response.sendStatus(400);
};
