const Pool = require('pg').Pool;

const pool = new Pool({
    user: "coderich",
    host: "localhost",
    database: "enyatadb",
    password: "",
    port: 5432
});

module.exports = pool;