const pool = require("./db");

const query = "INSERT INTO public.film (film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,special_features,fulltext)  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)  RETURNING *";
const data = ["12346","Letters to Juliet","romantic love story in venice","2009","1","3","1.00","60","20.99","G","{Behind the Scenes}","'academi':1 'battl':15 'canadian':20 'dinosaur':2 'drama':5 'epic':4 'feminist':8 'mad':11 'must':14 'rocki':21 'scientist':12 'teacher':17"];
pool.query(query,data,(err,res) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log(res.rows);
    }
})