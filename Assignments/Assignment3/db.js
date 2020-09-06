
// get the client
const mysql = require('mysql2');
 
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'nodeApps',
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0
});

module.exports = pool