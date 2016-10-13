/**
 * 文章model
 */

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/**
 *  数据库结构
 *  title: 标题
 *  content: 正文
 *  summary: 摘要
 *  img_url: 缩略图
 *  custom_url: 图片点击后跳转路径
 *  category: 分类(非展示名称, 目录别名alias)
 *  tags: 标签
 *  from: 0 转载, 1 原创
 *  is_recomment: 推荐
 *  comment_count: 评论数量
 *  visit_count: 浏览次数
 *  created_at: 创建时间
 *  updated_at: 更新时间
 *  is_html: 是否为html格式
 *  is_deleted: 删除
 *  is_draft: 是否为草稿
 */
let PostSchema = new Schema({
    title: { type: String },
    content: { type: String, default: '' },
    summary: { type: String, default: '' },
    img_url: { type: String, default: 'https://www.baidu.com/img/bd_logo1.png' },
    custom_url: { type: String, default: '' },
    category: { type: String },
    tags: { type: [String] },
    from: { type: Number, default: 0 },
    is_recomment: { type: Boolean, default: false },
    comment_count: { type: Number, default: 0 },
    visit_count: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    is_html: { type: Boolean, default: false },
    is_deleted: { type: Boolean, default: false },
    is_draft: { type: Boolean, default: false }
})

const postModel = mongoose.model('post', PostSchema, 'post')

export default postModel