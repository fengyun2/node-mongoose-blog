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

/**************************************
 *
 *  导入操作类
 *
 *  ***********************************/

import CategoryDao from './CategoryDao'

/**************************************
 *
 *  导出接口(创建Entity)
 *
 *  ***********************************/

module.exports = {
    categoryDao: new CategoryDao(categoryModel)
}