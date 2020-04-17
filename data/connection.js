const knex = require('knex');

const knexfile = require('../knexfile.js')

// Configured a connection to the database
const knexConfig = knexfile.development
 
// db represents a live connection to the database
module.exports = knex(knexConfig) // exporting the connection to the database for any other files that need it
