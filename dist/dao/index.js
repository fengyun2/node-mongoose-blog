'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _category = require('../models/category');

var _category2 = _interopRequireDefault(_category);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

var _tag = require('../models/tag');

var _tag2 = _interopRequireDefault(_tag);

var _comment = require('../models/comment');

var _comment2 = _interopRequireDefault(_comment);

var _CategoryDao = require('./CategoryDao');

var _CategoryDao2 = _interopRequireDefault(_CategoryDao);

var _DocDao = require('./DocDao');

var _DocDao2 = _interopRequireDefault(_DocDao);

var _TagDao = require('./TagDao');

var _TagDao2 = _interopRequireDefault(_TagDao);

var _CommentDao = require('./CommentDao');

var _CommentDao2 = _interopRequireDefault(_CommentDao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  categoryDao: new _CategoryDao2.default(_category2.default),
  postDao: new _DocDao2.default(_post2.default),
  tagDao: new _TagDao2.default(_tag2.default),
  commentDao: new _CommentDao2.default(_comment2.default)
};