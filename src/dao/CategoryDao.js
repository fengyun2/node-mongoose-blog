/**
 * 数据库操作类CategoryDao 继承于 BaseDao
 */

// 导入基础类
import BaseDao from './BaseDao'

class CategoryDao extends BaseDao {
    constructor(model) {
        super(model)
        this.model = model
    }

    updatePostCountById(id, inc_num, callback) {
        this.model.update({ _id: id }, { $inc: { post_count: inc_num } }, err => {
            if (err) {
                return callback(err)
            }

            return callback(null)
        })
    }

    incPostCountByAlias(alias, callback) {
        this.model.update({ alias: alias }, { $inc: { post_count: 1 } }, err => {
            if (err) {
                return callback(err)
            }

            return callback(null)
        })
    }

    decPostCountByAlias(alias, callback) {
        this.model.update({ alias: alias }, { $inc: { post_count: -1 } }, err => {
            if (err) {
                return callback(err)
            }

            return callback(null)
        })
    }

    getPostCountById(id, callback) {
        this.model.findOne({ _id: id }, 'post_count', (err, res) => {
            if (err) {
                return callback(err, null)
            }

            return callback(null, res)
        })
    }

    getPostCountByAlias(alias, callback) {
        this.model.findOne({ alias: alias }, '-_id post_count', (err, post_count) => {
            if (err) {
                return callback(err, null)
            }

            return callback(null, parseInt(post_count, 10) || 0)
        })
    }

    incOrderById(id, callback) {
        this.model.update({ _id: id }, { $inc: { order: 1 } }, err => {
            if (err) {
                return callback(err)
            }

            return callback(null)
        })
    }

    decOrderById(id, callback) {
        this.model.update({ _id: id, order: { $gt: 0 } }, { $inc: { order: -1 } }, err => {
            if (err) {
                return callback(err)
            }

            return callback(null)
        })
    }

    getNameByAlias(alias, callback) {
        this.model.findOne({ alias: alias }, '-_id name', (err, res) => {
            if (err) {
                return callback(err, null)
            }

            return callback(null, res)
        })
    }
}

export default CategoryDao