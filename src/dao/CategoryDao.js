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
}