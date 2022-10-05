const mysql = require('mysql2');
const conf = require('./config');

const connection = mysql.createConnection(conf.db)

connection.on(`error`, (err) => {
  console.error(`DB Connection error ${err.code}`);
});

module.exports = connection.promise()