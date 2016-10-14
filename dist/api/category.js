'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_all = exports.create = undefined;

var _utils = require('../common/utils');

var _utils2 = _interopRequireDefault(_utils);

var _index = require('../dao/index');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = exports.create = function create(req, res, next) {
    var data = req.body;
    if (!!data) {
        console.log('create: ', data);
        _index.categoryDao.add(data, function (err) {
            if (err) {
                return res.json({ succuess: false, error_msg: '添加分类失败' });
            }
            return res.json({ succuess: true, msg: '添加分类成功' });
        });
    }
};

var get_all = exports.get_all = function get_all(req, rex, next) {
    _index.categoryDao.getAll(function (err, data) {
        console.log('category_get_all: ', data);
        if (err) {
            return res.json({ succuess: false, error_msg: '查询分类失败' });
        }
        return res.json({ succuess: true, msg: '添加分类成功', data: data });
    });
};

exports.default = {
    create: create,
    get_all: get_all
};