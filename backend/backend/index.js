const express = require('express')
const app = express();

app.use(express.json())

app.use('/',(req,res)=>{
    res.send('Api running');
})


app.listen(5000,()=>{
    console.log(`Server listening on PORT 5000`)
})