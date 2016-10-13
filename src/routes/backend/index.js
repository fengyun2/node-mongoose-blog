import express from 'express'
import usersRouter from './users'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Hello Index Page')
})

export default router