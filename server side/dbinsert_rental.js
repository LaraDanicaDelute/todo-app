const pool = require("./db");

const query = "INSERT INTO public.rental (rental_date,inventory_id,customer_id,return_date,staff_id)  VALUES ($1, $2, $3, $4, $5)  RETURNING *";
const data = ["2005-05-24 22:53:30", "170", "135", "2005-05-26 22:04:30","1"];
pool.query(query,data,(err,res) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log(res.rows);
    }
})