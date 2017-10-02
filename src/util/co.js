/**
 * @param {function*} generator
 */

module.exports = generator => {
    var gen = generator();

    function next(response) {
        var ret = gen.next(response);
        if (ret.done) return;
        ret.value(next);
    }

    next();
};
