/**
 * 数据库操作类 DocDao(PostDao) 继承 BaseDao
 */

import BaseDao from './BaseDao'

const config = {
    page_num: 10
}

class DocDao extends BaseDao {
    constructor(model) {
        super(model)
        this.model = model
    }

    getByIdAndUpdateVisitCount(id, callback) {
        this.model.findByIdAndUpdate({ _id: id }, { $inc: { visit_count: 1 } }, (err, doc) => {
            if (err) return callback(err, null)

            return callback(null, doc)
        })
    }

    getPostsByCategoryId(category_id, page, pageSize, callback) {
        page = page || 1
        pageSize = pageSize || config.page_num
        this.model.find({ category_id: category_id })
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .exec((err, docs) => {
                if (err) return callback(err, null)

                return callback(null, docs)
            })
    }

    getArchivesByPage(page, callback) {
        this.model.find({}, 'title created_at')
            .sort({ "created_at": -1 })
            .limit(config.page_num)
            .exec((err, docs) => {
                if (err) return callback(err, null)

                return callback(null, docs)
            })
    }

    incCommentCount(id, callback) {
        this.model.update({ _id: id }, { $inc: { comment_count: 1 } }, (err, raw) => {
            if (err) return callback(err, null)

            return callback(null, raw)
        })
    }

    decCommentCount(id, callback) {
        this.model.update({ _id: 1 }, { $inc: { comment_count: -1 } }, (err, raw) => {
            if (err) return callback(err, null)

            return callback(null, raw)
        })
    }

    getSearchResult(title, page, callback) {
        page = page || 1

        this.model.find({ title: new RegExp(title) })
            .sort({ created_at: -1 })
            .skip((page - 1) * config.page_num)
            .limit(config.page_num)
            .exec((err, docs) => {
                if (err) return callback(err, null)

                return callback(null, docs)
            })
    }

    getCountByLikeTitle(title, callback) {
        this.model.count({ title: new RegExp(title) }, (err, sumCount) => {
            if (err) return callback(err, null)

            return callback(null, sumCount)
        })
    }
}

export default DocDao