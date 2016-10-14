'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('../../api');

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res, next) {
    console.log('method2: ' + req.method);
    res.send('Hello Index Page');
});

router.post('/category/create', _api.category.create);
router.get('/category/get_all', _api.category.get_all);

router.post('/post/create', _api.post.create);
router.get('/post/get_all', _api.post.get_all);

exports.default = router;