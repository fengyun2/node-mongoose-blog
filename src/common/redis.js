import redis from 'redis'
import config from '../config'
import logger from './logger'

const client = redis.createClient(config.redis.port, config.redis.host, {})

client.on('error', (err) => {
    if (err) {
        logger.error('connect to %s error: ', err.message)
        process.exit(1)
    }
})