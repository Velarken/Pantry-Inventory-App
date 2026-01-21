const { Pool } = require('pg');
require('dotenv').config();
const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD} = process.env;

module.exports = new Pool({
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    port: 5432,
    ssl: {require: true}
})