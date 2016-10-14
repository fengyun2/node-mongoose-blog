import express from 'express'
import { category, post } from '../../api'
import usersRouter from './users'
const router = express.Router()

// console.log('router: ', category.get_all)

router.get('/', (req, res, next) => {
    console.log(`method2: ${req.method}`)
    res.send('Hello Index Page')
})

// console.log('router_category: ', category)

// category
router.post('/category/create', category.create)
router.get('/category/get_all', category.get_all)

// post
router.post('/post/create', post.create)
router.get('/post/get_all', post.get_all)

export default router