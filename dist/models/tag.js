'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var TagSchema = new Schema({
  name: { type: String },
  description: { type: String, default: '' },
  post_count: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  last_post_at: { type: Date, default: Date.now },
  tag_category: { type: String }
});

TagSchema.index({ name: 1 });
TagSchema.index({ created_at: -1 });
TagSchema.index({ updated_at: -1 });
TagSchema.index({ post_count: -1 });
TagSchema.index({ last_post_at: -1 });

var tagModel = _mongoose2.default.model('tag', TagSchema, 'tag');

exports.default = tagModel;