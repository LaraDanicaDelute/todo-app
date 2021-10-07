const Pool = require("pg").Pool;

const pool = new Pool ({
        user: "postgres",
        password: "April24apple",
        host: "localhost",
        port: 5432,
        database: "sampledvdrental"
});

module.exports = pool;