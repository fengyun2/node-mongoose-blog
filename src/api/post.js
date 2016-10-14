import { postDao, categoryDao, tagDao } from '../dao/index'

const create = (req, res, next) => {
    // if (!res.body.data) {
    //     return res.json({ succuess: false, error_msg: '添加文章失败' })
    // }
    console.log('data', req.body.data)
    const data = JSON.parse(req.body.data)
    console.log('after data: ', data)
    let { title, from, custom_url, img_url, category, is_draft, summary, content, tags } = data
    let doc;
    doc = { title, from, custom_url, img_url, category, is_draft, summary, content, tags }

    if (!!tags) {
        doc.tags = tags.split(',')
    } else {
        doc.tags = []
    }


    // 添加文章

    postDao.add(doc, err => {
        if (err) return res.json({ succuess: false, error_msg: '添加文章失败' })
        if (!is_draft) {
            categoryDao.incPostCountByAlias(category, err => {
                return res.json({ succuess: succuess, error_msg: '添加标签成功' })
            })

            doc.tags.map(name => {
                tagDao.getOneByName(name, (err, tag) => {
                    if (err) return res.json({ succuess: false, error_msg: '添加标签失败' })
                    if (!tag) {
                        tagDao.add({
                            name: name,
                            post_count: 1
                        }, err => {
                            if (err) return res.json({ succuess: false, error_msg: '添加标签失败' })

                            return res.json({ succuess: false, error_msg: '添加标签成功' })
                        })
                    } else {
                        tagDao.incPostCountByName(name, err => {
                            if (err) return res.json({ succuess: false, error_msg: '添加标签失败' })

                            return res.json({ succuess: false, error_msg: '添加标签成功' })
                        })
                    }
                })
            })
        }
    })
}

export const get_all = (req, res, next) => {
    console.log('from: post_get_all')

    // return res.json({ succuess: true, msg: '请求成功' })

    postDao.getAll((err, data) => {
        console.log('post_get_all: ', data)
        if (err) {
            return res.json({ succuess: false, error_msg: '查询分类失败' })
        }
        return res.json({ succuess: true, msg: '查询分类成功', data: data })
    })
}

export default {
    create,
    get_all
}