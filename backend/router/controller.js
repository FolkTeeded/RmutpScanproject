const pool = require(`./db`);
const getscan = (req, res) =>{
    pool.query("SELECT * FROM public.login",(error,result)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })

}