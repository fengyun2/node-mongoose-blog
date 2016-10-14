/**
 * tag model
 */

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/**
 * 数据库结构
 * name: 标签名称
 * description: 描述
 * post_count: 该标签出现的次数
 *
 */
const TagSchema = new Schema({
    name: { type: String },
    description: { type: String, default: '' },
    post_count: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    last_post_at: { type: Date, default: Date.now },
    tag_category: { type: String }
})

TagSchema.index({ name: 1 })
TagSchema.index({ created_at: -1 })
TagSchema.index({ updated_at: -1 })
TagSchema.index({ post_count: -1 })
TagSchema.index({ last_post_at: -1 })

// 第三个参数决定集合是否以复数的形式
const tagModel = mongoose.model('tag', TagSchema, 'tag')

export default tagModel