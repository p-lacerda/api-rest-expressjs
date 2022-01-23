// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'tslacerda',
  password: 'Paulodts21!',
  database: 'financeiro_db'
});

module.exports = connection;