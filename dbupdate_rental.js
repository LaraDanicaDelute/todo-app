const pool = require("./db");

pool.query("UPDATE public.rental SET rental_date = $1 WHERE customer_id = 600 RETURNING*",
['2005-05-26 22:04:30'], (err,res) => {
    if(err) {
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();