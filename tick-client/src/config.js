const cfg = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT ? parseInt(process.env.PORT) : 8111,
  roomId: process.env.ROOM_ID || '1',
}

module.exports = cfg;