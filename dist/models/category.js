'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  alias: { type: String, required: true },
  post_count: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  order: { type: Number, default: 0 }
});

CategorySchema.index({ post_count: -1 });
CategorySchema.index({ order: 1 });

var categoryModel = _mongoose2.default.model('category', CategorySchema, 'category');

exports.default = categoryModel;