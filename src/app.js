import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import helmet from 'helmet'
import csurf from 'csurf'
import apiRouter from './routes/backend'
// const RedisStore = require('connect-redis')(session)

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json({
    limit: '1mb'
}))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '1mb'
}))
app.use(cookieParser())

app.use(helmet.hidePoweredBy())
app.use(helmet.frameguard())


// app.use(csurf()) // 防止跨站请求伪造

app.use('/api', apiRouter)

// catch 404
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        message: err.message,
        error: err
    })
})

// export default app
module.exports = app