'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
  post_id: { type: ObjectId },
  nick_name: { type: String },
  email: { type: String },
  created_at: { type: Date, default: Date.now },
  reply_id: { type: ObjectId },
  pass: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  identity: { type: Number, default: 0 }
});

CommentSchema.index({ post_id: -1, created_at: 1 });

var CommentModel = _mongoose2.default.model('comment', CommentSchema, 'comment');

exports.default = CommentModel;