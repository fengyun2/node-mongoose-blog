'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_all = undefined;

var _index = require('../dao/index');

var create = function create(req, res, next) {
    console.log('data', req.body.data);
    var data = JSON.parse(req.body.data);
    console.log('after data: ', data);
    var title = data.title;
    var from = data.from;
    var custom_url = data.custom_url;
    var img_url = data.img_url;
    var category = data.category;
    var is_draft = data.is_draft;
    var summary = data.summary;
    var content = data.content;
    var tags = data.tags;

    var doc = void 0;
    doc = { title: title, from: from, custom_url: custom_url, img_url: img_url, category: category, is_draft: is_draft, summary: summary, content: content, tags: tags };

    if (!!tags) {
        doc.tags = tags.split(',');
    } else {
        doc.tags = [];
    }

    _index.postDao.add(doc, function (err) {
        if (err) return res.json({ succuess: false, error_msg: '添加文章失败' });
        if (!is_draft) {
            _index.categoryDao.incPostCountByAlias(category, function (err) {
                return res.json({ succuess: succuess, error_msg: '添加标签成功' });
            });

            doc.tags.map(function (name) {
                _index.tagDao.getOneByName(name, function (err, tag) {
                    if (err) return res.json({ succuess: false, error_msg: '添加标签失败' });
                    if (!tag) {
                        _index.tagDao.add({
                            name: name,
                            post_count: 1
                        }, function (err) {
                            if (err) return res.json({ succuess: false, error_msg: '添加标签失败' });

                            return res.json({ succuess: false, error_msg: '添加标签成功' });
                        });
                    } else {
                        _index.tagDao.incPostCountByName(name, function (err) {
                            if (err) return res.json({ succuess: false, error_msg: '添加标签失败' });

                            return res.json({ succuess: false, error_msg: '添加标签成功' });
                        });
                    }
                });
            });
        }
    });
};

var get_all = exports.get_all = function get_all(req, res, next) {
    console.log('from: post_get_all');

    _index.postDao.getAll(function (err, data) {
        console.log('post_get_all: ', data);
        if (err) {
            return res.json({ succuess: false, error_msg: '查询分类失败' });
        }
        return res.json({ succuess: true, msg: '查询分类成功', data: data });
    });
};

exports.default = {
    create: create,
    get_all: get_all
};