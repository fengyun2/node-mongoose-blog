'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
  title: { type: String },
  content: { type: String, default: '' },
  summary: { type: String, default: '' },
  img_url: { type: String, default: 'https://www.baidu.com/img/bd_logo1.png' },
  custom_url: { type: String, default: '' },
  category: { type: String },
  tags: { type: [String] },
  from: { type: Number, default: 0 },
  is_recomment: { type: Boolean, default: false },
  comment_count: { type: Number, default: 0 },
  visit_count: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  is_html: { type: Boolean, default: false },
  is_deleted: { type: Boolean, default: false },
  is_draft: { type: Boolean, default: false }
});

var postModel = _mongoose2.default.model('post', PostSchema, 'post');

exports.default = postModel;