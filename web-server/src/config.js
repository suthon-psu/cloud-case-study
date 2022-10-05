const isProd = process.env.NODE_ENV === 'production'

const cfg = {
  isProd,
  port: process.env.PORT ? parseInt(process.env.PORT) : 8000,
  redisUrl: process.env.REDIS_URL || 'redis://localhost',  
  db: {
    database: process.env.DB_DATABASE || 'tick',
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
  }
  
}

module.exports = cfg;