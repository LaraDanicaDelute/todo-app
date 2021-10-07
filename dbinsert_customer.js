const pool = require("./db");

const query = "INSERT INTO public.customer (store_id, first_name, last_name, email, address_id, activebool)  VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *";
const data = ["6969","Danica", "Delute", "ldelute_190000001819@uic.edu.ph","001","true"];
pool.query(query,data,(err,res) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log(res.rows);
    }
})