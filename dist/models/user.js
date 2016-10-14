'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    nick_name: { type: String },
    account: { type: String },
    password: { type: String },
    email: { type: String },
    location: { type: String },
    qq: { type: String },
    img_url: { type: String },
    motto: { type: String },
    github: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

UserSchema.index({ created_at: -1 });
UserSchema.index({ updated_at: -1 });
UserSchema.index({ email: 1 }, { unique: true });

var userModel = _mongoose2.default.model('user', UserSchema, 'user');

exports.default = userModel;