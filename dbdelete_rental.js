const pool = require("./db");

pool.query("DELETE FROM public.rental WHERE rental_id =$1 RETURNING *", ["16051"], (err, res) => {
    if (err) {
        console.log(err.stack);
    }
    else {
        console.log(res.rows);
    }
});
pool.end();