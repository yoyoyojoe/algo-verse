const { Pool } = require("pg");
require('dotenv').config();


const pool = new Pool({
  connectionString: process.env.DB_URI
});

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}

