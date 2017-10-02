module.exports = (request, response) => {
    console.log('GET DATA : ', request.params);
    var result = request.params;
    result ? response.sendStatus(200) : response.sendStatus(400);
};
