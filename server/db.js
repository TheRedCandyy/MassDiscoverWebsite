const mysql = require('mysql');
const CREDENTIALS = require('./credentials');

const connection = mysql.createConnection({
  host: CREDENTIALS.DB_HOST,
  user: CREDENTIALS.DB_USER,
  password: CREDENTIALS.DB_PASSWORD,
  database: CREDENTIALS.DB_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Connected to the database');
});

// connection.end();

module.exports = connection;