const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PWD || 'root',
    database: process.env.DB_NAME || 'todoapp',
    port: process.env.DB_PORT || 8889
  },
  pool: {
    min: 0,
    max: 50
  }
});

module.exports = knex;
