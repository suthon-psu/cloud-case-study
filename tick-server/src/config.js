const cfg = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 8111,
  redisUrl: process.env.REDIS_URL || 'redis://localhost',  
}

module.exports = cfg;