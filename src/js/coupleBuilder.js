module.exports = function(devList) {
    var _ = require('lodash');
    return _.chunk(_.shuffle(devList), 2);
}
