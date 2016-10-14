'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_all = exports.create = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('../common/utils');

var _utils2 = _interopRequireDefault(_utils);

var _index = require('../dao/index');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = exports.create = function create(req, res, next) {
    var data = req.body.data;

    if (!!data) {
        data = JSON.parse(data);
        console.log('create: ', data);
        console.log('create: ', typeof data === 'undefined' ? 'undefined' : _typeof(data));
        _index.categoryDao.add(data, function (err) {
            if (err) {
                return res.json({ succuess: false, error_msg: '添加分类失败' });
            }
            return res.json({ succuess: true, msg: '添加分类成功' });
        });
    }
};

var get_all = exports.get_all = function get_all(req, res, next) {
    console.log('from: get_all');

    _index.categoryDao.getAll(function (err, data) {
        console.log('category_get_all: ', data);
        if (err) {
            return res.json({ succuess: false, error_msg: '查询分类失败' });
        }
        return res.json({ succuess: true, msg: '查询分类成功', data: data });
    });
};

exports.default = {
    create: create,
    get_all: get_all
};