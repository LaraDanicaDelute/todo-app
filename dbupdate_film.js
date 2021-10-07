const pool = require("./db");

pool.query("UPDATE public.customer SET title = $1 WHERE film_id = 12345 RETURNING*",
['Juliet'], (err,res) => {
    if(err) {
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();