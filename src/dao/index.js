/**
 * 数据库核心操作控制中心
 */

import config from '../config'

/**************************************
 *
 *  导入模型
 *
 *  ***********************************/

// categry模型
import categoryModel from '../models/category'

// post模型
import postModel from '../models/post'

// tag模型
import tagModel from '../models/tag'

// comment模型
import commentModel from '../models/comment'

/**************************************
 *
 *  导入操作类
 *
 *  ***********************************/

import CategoryDao from './CategoryDao'

import DocDao from './DocDao'

import TagDao from './TagDao'

import CommentDao from './CommentDao'

/**************************************
 *
 *  导出接口(创建Entity)
 *
 *  ***********************************/

module.exports = {
    categoryDao: new CategoryDao(categoryModel),
    postDao: new DocDao(postModel),
    tagDao: new TagDao(tagModel),
    commentDao: new CommentDao(commentModel)
}