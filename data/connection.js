const knex = require('knex');

// Configured a connection to the database
const knexConfig = {
   client: 'sqlite3', // db driver
   connection: {
     //could be an object or a string
     filename: './data/produce.db3' // only one .
   },
   useNullAsDefault: true
}
 
// db represents a live connection to the database
module.exports = knex(knexConfig) // exporting the connection to the database for any other files that need it
