const express = require('express')
const router = express.Router()
const db = require('./db')
const redisClient = require('./redis')

router.get('/room', async (req, res) => {
  const [rows, fields] = await db.query('select * from Room');
  res.send(rows)
})

router.get('/room/:roomId/value', async (req, res) => {
  const value = await redisClient.get(`room_${req.params.roomId}`) || 0;
  res.send({id: req.params.roomId, value})
})

module.exports = router