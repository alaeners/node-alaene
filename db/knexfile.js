// Update with your config settings.

// export async function connect() {
//   let conn = {
//       client: 'pg',
//       connection: {
//           connectionString: process.env.DATABASE_URL,
//           ssl: {
//               rejectUnatorized: false
//           },
//       }
//   }
//   knex_conn = knex(conn);
//   return knex_conn;
// }

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnatorized: false
        },
    }
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
