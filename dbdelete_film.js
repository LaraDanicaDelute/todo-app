const pool = require("./db");

pool.query("DELETE FROM public.film WHERE film_id =$1 RETURNING *", ["12346"], (err, res) => {
    if (err) {
        console.log(err.stack);
    }
    else {
        console.log(res.rows);
    }
});
pool.end();