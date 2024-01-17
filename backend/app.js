const express = require('express');

const apiRouter = require("./backend/router/routes") 

const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send('hello word')
})
app.use("/project/public/projectEnd",apiRouter)

app.listen(port,() => console.log(`hello word ${port}`));