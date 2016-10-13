import mongoose from 'mongoose'
import config from '../config'
import logger from './logger'

mongoose.connect(config.db, {
    server: { poolSize: 20 }
}, err => {
    if (err) {
        logger.error('connect to %s error: ', config.db, err.message)
        process.exit(1)
    }
})