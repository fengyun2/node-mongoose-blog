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

var config = {
    page_num: 10
};

var DocDao = function (_BaseDao) {
    _inherits(DocDao, _BaseDao);

    function DocDao(model) {
        _classCallCheck(this, DocDao);

        var _this = _possibleConstructorReturn(this, (DocDao.__proto__ || Object.getPrototypeOf(DocDao)).call(this, model));

        _this.model = model;
        return _this;
    }

    _createClass(DocDao, [{
        key: 'getByIdAndUpdateVisitCount',
        value: function getByIdAndUpdateVisitCount(id, callback) {
            this.model.findByIdAndUpdate({ _id: id }, { $inc: { visit_count: 1 } }, function (err, doc) {
                if (err) return callback(err, null);

                return callback(null, doc);
            });
        }
    }, {
        key: 'getPostsByCategoryId',
        value: function getPostsByCategoryId(category_id, page, pageSize, callback) {
            page = page || 1;
            pageSize = pageSize || config.page_num;
            this.model.find({ category_id: category_id }).skip((page - 1) * pageSize).limit(pageSize).exec(function (err, docs) {
                if (err) return callback(err, null);

                return callback(null, docs);
            });
        }
    }, {
        key: 'getArchivesByPage',
        value: function getArchivesByPage(page, callback) {
            this.model.find({}, 'title created_at').sort({ "created_at": -1 }).limit(config.page_num).exec(function (err, docs) {
                if (err) return callback(err, null);

                return callback(null, docs);
            });
        }
    }, {
        key: 'incCommentCount',
        value: function incCommentCount(id, callback) {
            this.model.update({ _id: id }, { $inc: { comment_count: 1 } }, function (err, raw) {
                if (err) return callback(err, null);

                return callback(null, raw);
            });
        }
    }, {
        key: 'decCommentCount',
        value: function decCommentCount(id, callback) {
            this.model.update({ _id: 1 }, { $inc: { comment_count: -1 } }, function (err, raw) {
                if (err) return callback(err, null);

                return callback(null, raw);
            });
        }
    }, {
        key: 'getSearchResult',
        value: function getSearchResult(title, page, callback) {
            page = page || 1;

            this.model.find({ title: new RegExp(title) }).sort({ created_at: -1 }).skip((page - 1) * config.page_num).limit(config.page_num).exec(function (err, docs) {
                if (err) return callback(err, null);

                return callback(null, docs);
            });
        }
    }, {
        key: 'getCountByLikeTitle',
        value: function getCountByLikeTitle(title, callback) {
            this.model.count({ title: new RegExp(title) }, function (err, sumCount) {
                if (err) return callback(err, null);

                return callback(null, sumCount);
            });
        }
    }]);

    return DocDao;
}(_BaseDao3.default);

exports.default = DocDao;