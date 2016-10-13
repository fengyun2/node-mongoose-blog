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

export default client

/*****
 * 设置缓存
 * @param key   缓存key
 * @param field 缓存field
 * @param value 缓存value
 * @param expired   缓存有效时长
 * @param callback  回调函数，返回增加后的结果
 */
export const hincrby = function(key, field, value, expired, callback) {
    client.exists(key, function(err, res) {
        client.hincrby(key, field, value, function(err, num) {
            if (res == 0 && expired) {
                client.expire(key, expired);
            }
            callback(null, num);
        });
    });
}

/**
 * 设置缓存
 * @param key 缓存key
 * @param value 缓存value
 * @param expired 缓存有效时长
 * @param callback 回调函数
 */
export const set = function(key, value, expired, callback) {

    var s = new Date();

    if (typeof expired === 'function') {
        callback = expired;
        expired = null;
    }

    value = JSON.stringify(value);

    if (!expired) {
        client.set(key, value, callback);
    } else {
        client.setex(key, expired, value, callback);
    }

    var duration = (new Date() - s);
    logger.debug("Cache", "set", key, (duration + 'ms').green);

};

/**
 * 获取缓存
 * @param key 缓存key
 * @param callback 回调函数
 */
export const get = function(key, callback) {

    var t = new Date();

    client.get(key, function(err, data) {
        if (err) {
            return callback(err);
        }
        if (!data) {
            return callback();
        }
        data = JSON.parse(data);
        var duration = (new Date() - t);
        logger.debug('Cache', 'get', key, (duration + 'ms').green);
        callback(null, data);
    });

};

/**
 * 移除缓存
 * @param key 缓存key
 * @param callback 回调函数
 */
export const remove = function(key, callback) {
    client.del(key, callback);
};

export const ttl = function(key, callback) {
    client.ttl(key, callback);
}