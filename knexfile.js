// Update with your config settings.

module.exports = {

  development: {
    // COPIED FROM CONNECTION.JS AFTER KNEX INIT//
    client: 'sqlite3', // db driver
    connection: {
      //could be an object or a string
      filename: './data/market.db3' // only one .
    },
    useNullAsDefault: true
 },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};


// npm i -g knex
// knex init
// move the object from connection.js into the development property in knexfile.js

// update connection.js to require knexfile and use the development property as the connect config.

// change db name inside knexfile.js

// run the migration with knex:migrate latest
