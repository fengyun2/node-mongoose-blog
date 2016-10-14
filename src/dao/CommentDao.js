/**
 * 数据库操作类 DocDao(PostDao) 继承 BaseDao
 */

import BaseDao from './BaseDao'

class CommentDao extends BaseDao {
    constructor(model) {
        super(model)
        this.model = model
    }
}

export default CommentDao