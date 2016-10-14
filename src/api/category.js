import utils from '../common/utils'
import { categoryDao } from '../dao/index'
import config from '../config'

export const create = (req, res, next) => {
    let { data } = req.body
    if (!!data) {
        data = JSON.parse(data)
        console.log('create: ', data)
        console.log('create: ', typeof data)
        categoryDao.add(data, err => {
            if (err) {
                return res.json({ succuess: false, error_msg: '添加分类失败' })
            }
            return res.json({ succuess: true, msg: '添加分类成功' })
        })
    }
}

export const get_all = (req, res, next) => {
    console.log('from: get_all')

    // return res.json({ succuess: true, msg: '请求成功' })

    categoryDao.getAll((err, data) => {
        console.log('category_get_all: ', data)
        if (err) {
            return res.json({ succuess: false, error_msg: '查询分类失败' })
        }
        return res.json({ succuess: true, msg: '添加分类成功', data: data })
    })
}

export default {
    create,
    get_all
}