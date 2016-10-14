/**
 * 数据库操作类TagDao 继承于 BaseDao
 */
import BaseDao from './BaseDao'

class TagDao extends BaseDao {
    constructor(model) {
        super(model)
        this.model = model
    }

    incPostCountByName(name, callback = () => {}) {
        this.model.update({ name: name }, { $inc: { post_count: 1 } }, err => {
            if (err) return callback(err)

            return callback(null)
        })
    }

    decPostCountByName(name, callback = () => {}) {
        this.model.update({ name: name }, { $inc: { post_count: -1 } }, err => {
            if (err) return callback(err)

            return callback(null)
        })
    }

    getOneByName(name, callback = () => {}) {
        this.model.findOne({ name: name }, (err, model) => {
            if (err) return callback(err, null)

            return callback(null, model)
        })
    }
}

export default TagDao