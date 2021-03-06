'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDao2 = require('./BaseDao');

var _BaseDao3 = _interopRequireDefault(_BaseDao2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryDao = function (_BaseDao) {
    _inherits(CategoryDao, _BaseDao);

    function CategoryDao(model) {
        _classCallCheck(this, CategoryDao);

        var _this = _possibleConstructorReturn(this, (CategoryDao.__proto__ || Object.getPrototypeOf(CategoryDao)).call(this, model));

        _this.model = model;
        return _this;
    }

    _createClass(CategoryDao, [{
        key: 'updatePostCountById',
        value: function updatePostCountById(id, inc_num, callback) {
            this.model.update({ _id: id }, { $inc: { post_count: inc_num } }, function (err) {
                if (err) {
                    return callback(err);
                }

                return callback(null);
            });
        }
    }, {
        key: 'incPostCountByAlias',
        value: function incPostCountByAlias(alias, callback) {
            this.model.update({ alias: alias }, { $inc: { post_count: 1 } }, function (err) {
                if (err) {
                    return callback(err);
                }

                return callback(null);
            });
        }
    }, {
        key: 'decPostCountByAlias',
        value: function decPostCountByAlias(alias, callback) {
            this.model.update({ alias: alias }, { $inc: { post_count: -1 } }, function (err) {
                if (err) {
                    return callback(err);
                }

                return callback(null);
            });
        }
    }, {
        key: 'getPostCountById',
        value: function getPostCountById(id, callback) {
            this.model.findOne({ _id: id }, 'post_count', function (err, res) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, res);
            });
        }
    }, {
        key: 'getPostCountByAlias',
        value: function getPostCountByAlias(alias, callback) {
            this.model.findOne({ alias: alias }, '-_id post_count', function (err, post_count) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, parseInt(post_count, 10) || 0);
            });
        }
    }, {
        key: 'incOrderById',
        value: function incOrderById(id, callback) {
            this.model.update({ _id: id }, { $inc: { order: 1 } }, function (err) {
                if (err) {
                    return callback(err);
                }

                return callback(null);
            });
        }
    }, {
        key: 'decOrderById',
        value: function decOrderById(id, callback) {
            this.model.update({ _id: id, order: { $gt: 0 } }, { $inc: { order: -1 } }, function (err) {
                if (err) {
                    return callback(err);
                }

                return callback(null);
            });
        }
    }, {
        key: 'getNameByAlias',
        value: function getNameByAlias(alias, callback) {
            this.model.findOne({ alias: alias }, '-_id name', function (err, res) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, res);
            });
        }
    }]);

    return CategoryDao;
}(_BaseDao3.default);

exports.default = CategoryDao;