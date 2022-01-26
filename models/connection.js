// hello-msc/models/connection.js

const mysql = require('mysql2/promise');
// require('dotenv').config()

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'paulodts21',
  database: 'financeiro_db'
});

module.exports = connection;