import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Hello users Index Page')
})

export default router