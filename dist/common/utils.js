'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getClientIP = exports.formatDate = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');var formatDate = exports.formatDate = function formatDate(date, friendly) {
    date = (0, _moment2.default)('date');

    if (friendly) {
        return date.fromNow();
    } else {
        return date.format('YYYY-MM-DD HH:mm:ss');
    }
};

var getClientIP = exports.getClientIP = function getClientIP(req) {
    var ipAddress = void 0;
    var headers = req.headers;
    var forwardedIpsStr = headers['x-real-ip'] || headers['x-forwarded-for'];
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
};