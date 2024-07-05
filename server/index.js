const express = require('express');
const app = express();
const port = 5000;
require('./db');

app.use(express.json())

app.use('/user',require('./routes/user_routes'))


app.get('/',(req,res)=>{
    res.send("Hello");
})

//Server
app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})