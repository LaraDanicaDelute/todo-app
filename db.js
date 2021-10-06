const Pool = require("pg").Pool;

const Pool = new Pool ({
        user: "postgres",
        password: "April24apple",
        host: "localhost",
        port: 5432,
        databse: "sampledvdrental"
});

module.exports = pool;