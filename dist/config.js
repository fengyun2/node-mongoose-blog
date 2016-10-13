'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    db: 'mongodb://127.0.0.1/blog',
    session_secret: 'node_club_secret',
    redis: {
        host: '127.0.0.1',
        port: 6379,
        db: 0,
        cache_expired: "300" }
};
exports.default = config;