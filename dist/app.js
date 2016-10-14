'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _csurf = require('csurf');

var _csurf2 = _interopRequireDefault(_csurf);

var _backend = require('./routes/backend');

var _backend2 = _interopRequireDefault(_backend);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./common/mongoose');

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json({
    limit: '1mb'
}));
app.use(_bodyParser2.default.urlencoded({
    extended: true,
    limit: '1mb'
}));
app.use((0, _cookieParser2.default)());

app.use(_helmet2.default.hidePoweredBy());
app.use(_helmet2.default.frameguard());

app.use('/api', _backend2.default);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

module.exports = app;