'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ttl = exports.remove = exports.get = exports.set = exports.hincrby = undefined;

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

exports.default = client;
var hincrby = exports.hincrby = function hincrby(key, field, value, expired, callback) {
    client.exists(key, function (err, res) {
        client.hincrby(key, field, value, function (err, num) {
            if (res == 0 && expired) {
                client.expire(key, expired);
            }
            callback(null, num);
        });
    });
};

var set = exports.set = function set(key, value, expired, callback) {

    var s = new Date();

    if (typeof expired === 'function') {
        callback = expired;
        expired = null;
    }

    value = JSON.stringify(value);

    if (!expired) {
        client.set(key, value, callback);
    } else {
        client.setex(key, expired, value, callback);
    }

    var duration = new Date() - s;
    _logger2.default.debug("Cache", "set", key, (duration + 'ms').green);
};

var get = exports.get = function get(key, callback) {

    var t = new Date();

    client.get(key, function (err, data) {
        if (err) {
            return callback(err);
        }
        if (!data) {
            return callback();
        }
        data = JSON.parse(data);
        var duration = new Date() - t;
        _logger2.default.debug('Cache', 'get', key, (duration + 'ms').green);
        callback(null, data);
    });
};

var remove = exports.remove = function remove(key, callback) {
    client.del(key, callback);
};

var ttl = exports.ttl = function ttl(key, callback) {
    client.ttl(key, callback);
};