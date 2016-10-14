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

var TagDao = function (_BaseDao) {
    _inherits(TagDao, _BaseDao);

    function TagDao(model) {
        _classCallCheck(this, TagDao);

        var _this = _possibleConstructorReturn(this, (TagDao.__proto__ || Object.getPrototypeOf(TagDao)).call(this, model));

        _this.model = model;
        return _this;
    }

    _createClass(TagDao, [{
        key: 'incPostCountByName',
        value: function incPostCountByName(name) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            this.model.update({ name: name }, { $inc: { post_count: 1 } }, function (err) {
                if (err) return callback(err);

                return callback(null);
            });
        }
    }, {
        key: 'decPostCountByName',
        value: function decPostCountByName(name) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            this.model.update({ name: name }, { $inc: { post_count: -1 } }, function (err) {
                if (err) return callback(err);

                return callback(null);
            });
        }
    }, {
        key: 'getOneByName',
        value: function getOneByName(name) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            this.model.findOne({ name: name }, function (err, model) {
                if (err) return callback(err, null);

                return callback(null, model);
            });
        }
    }]);

    return TagDao;
}(_BaseDao3.default);

exports.default = TagDao;