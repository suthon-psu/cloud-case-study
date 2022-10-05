const { createClient } = require('redis');
const conf = require('./config')

const redisClient = createClient({url: conf.redisUrl});
redisClient.connect()

redisClient.on('error', (err) => console.log('Redis Client Error', err));

module.exports = redisClient