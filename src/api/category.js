import utils from '../common/utils'
import { categoryDao } from '../dao/index'
import config from '../config'

export const create = (req, res, next) => {
    const data = req.body
    if (!!data) {
        console.log('create: ', data)
        categoryDao.add(data, err => {
            if (err) {
                return res.json({ succuess: false, error_msg: '添加分类失败' })
            }
            return res.json({ succuess: true, msg: '添加分类成功' })
        })

    }
}

export const get_all = (req, rex, next) => {
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