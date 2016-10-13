import express from 'express'
import usersRouter from './users'
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log(`method2: ${req.method}`)
    res.send('Hello Index Page')
})

export default router