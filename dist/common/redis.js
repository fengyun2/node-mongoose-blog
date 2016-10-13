'use strict';

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _redis2.default.createClient(_config2.default.redis.port, _config2.default.redis.host, {});

client.on('error', function (err) {
    if (err) {
        _logger2.default.error('connect to %s error: ', err.message);
        process.exit(1);
    }
});