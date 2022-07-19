// docs @ https://node-postgres.com/
const { Pool } = require("pg");
require('dotenv').config();

// enter your own DB_URI in your own .env file
// console.log('process.env.DB_URI =', process.env.DB_URI);

const pool = new Pool({
  connectionString: process.env.DB_URI
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}

