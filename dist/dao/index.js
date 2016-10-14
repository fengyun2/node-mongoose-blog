'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _category = require('../models/category');

var _category2 = _interopRequireDefault(_category);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

var _CategoryDao = require('./CategoryDao');

var _CategoryDao2 = _interopRequireDefault(_CategoryDao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  categoryDao: new _CategoryDao2.default(_category2.default)
};