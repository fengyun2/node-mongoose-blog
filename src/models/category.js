/**
 * 分类model
 */

import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * 创建数据库结构
 * name: 分类中文名称, 页面所展示的名称
 * alias: 目录英文名称, 为路径所带的名称
 * post_count: 该目录下的文章数量
 */
let CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    alias: { type: String, required: true },
    post_count: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    order: { type: Number, default: 0 }
})

/**
 * 建立索引
 */
CategorySchema.index({ post_count: -1 })
CategorySchema.index({ order: 1 })

/**
 * 创建model
 */
const categoryModel = mongoose.model('category', CategorySchema, 'category')

export default categoryModel