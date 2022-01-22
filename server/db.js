const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'amirgal',
    host:'localhost',
    post:5432,
    database:'supermarket_db'
});

module.exports = pool;