/**
 * comment模型
 */

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/**
 * 数据库结构
 * post_id: 文章id
 * nick_name: 用户名
 * email: 邮箱
 * created_at: 创建时间
 * reply_id: 回复评论id
 * pass: 评论通过审核
 * deleted: 被删除
 * identity: 0 代表游客, 1 代表博主
 */
const CommentSchema = new Schema({
    post_id: { type: ObjectId },
    nick_name: { type: String },
    email: { type: String },
    created_at: { type: Date, default: Date.now },
    reply_id: { type: ObjectId },
    pass: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    identity: { type: Number, default: 0 }
})

// 建立索引
CommentSchema.index({ post_id: -1, created_at: 1 })

// 第三个参数决定集合是否以复数的形式
const CommentModel = mongoose.model('comment', CommentSchema, 'comment')

export default CommentModel