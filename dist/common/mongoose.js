'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.db, {
    server: { poolSize: 20 }
}, function (err) {
    if (err) {
        _logger2.default.error('connect to %s error: ', _config2.default.db, err.message);
        process.exit(1);
    }
});