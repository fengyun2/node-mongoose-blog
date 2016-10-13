"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseDao = function () {
    function BaseDao(model) {
        _classCallCheck(this, BaseDao);

        this.model = model;
    }

    _createClass(BaseDao, [{
        key: "add",
        value: function add(data, callback) {
            this.model.create(data, function (err) {
                if (err) {
                    return callback(err);
                }

                return callback(null);
            });
        }
    }, {
        key: "getById",
        value: function getById(id, callback) {
            return this.model.findById(id, function (err, data) {
                if (err) {
                    return callback(err, null);
                }
                callback(null, data);
            });
        }
    }, {
        key: "getByIdAndUpdate",
        value: function getByIdAndUpdate(id, update, callback) {
            return this.model.findByIdAndUpdate(id, update, function (err, data) {
                if (err) {
                    return callback(err, null);
                }

                callback(null, data);
            });
        }
    }, {
        key: "getAll",
        value: function getAll(callback) {
            this.model.find({}, function (err, model) {
                if (err) return callback(err, null);

                return callback(null, model);
            });
        }
    }, {
        key: "getByQuery",
        value: function getByQuery(query, fields, opt, callback) {
            this.model.find(query, fields, opt, function (err, model) {
                if (err) return callback(err, null);

                return callback(null, model);
            });
        }
    }, {
        key: "getOneByQuery",
        value: function getOneByQuery(query, fields, opt, callback) {
            this.model.findOne(query, fields, opt, function (err, model) {
                if (err) return callback(err, null);

                return callback(null, model);
            });
        }
    }, {
        key: "deleteById",
        value: function deleteById(id, callback) {
            this.model.remove({ _id: id }, function (err, raw) {
                if (err) return callback(err, null);

                return callback(null, raw);
            });
        }
    }, {
        key: "getSumCount",
        value: function getSumCount(callback) {
            this.model.count({}, function (err, sumCount) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, sumCount);
            });
        }
    }, {
        key: "getSumCountByQuery",
        value: function getSumCountByQuery(query, callback) {
            this.model.count(query, function (err, sumCount) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, sumCount);
            });
        }
    }, {
        key: "updateById",
        value: function updateById(id, doc, callback) {
            this.model.update({ _id: id }, doc, function (err, raw) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, raw);
            });
        }
    }, {
        key: "findByIdAndUpdate",
        value: function findByIdAndUpdate(id, fields, callback) {
            this.model.findByIdAndUpdate({ _id: id }, fields, function (err, doc) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, doc);
            });
        }
    }, {
        key: "getListByPage",
        value: function getListByPage(obj, callback) {
            var page = obj.page || 1;
            var page_size = obj.page_size || 10;
            var query = obj.query || {};
            var sort = obj.sort || { created_at: -1 };
            var fields = obj.fields || null;

            this.model.find(query).select(fields).sort(sort).skip((page - 1) * page_size).limit(page_size).exec(function (err, docs) {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, docs);
            });
        }
    }]);

    return BaseDao;
}();

exports.default = BaseDao;