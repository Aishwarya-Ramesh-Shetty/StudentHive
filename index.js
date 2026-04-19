const express = require('express')
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db')
dotenv.config();
connectDB();
const userRoute = require('./routes/userRoute')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Api running');
})

app.use('/api/users',userRoute);


app.listen(5000,()=>{
    console.log(`Server listening on PORT 5000`)
})