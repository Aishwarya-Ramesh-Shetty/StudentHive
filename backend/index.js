const express = require('express')
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const userRoute = require('./routes/userRoute');
const propertyRoute = require('./routes/propertyRoute');
const {notFound,errorHandler} = require('./middleware/errorMiddleware');
app.use(express.json())
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');


app.get('/',(req,res)=>{
    res.send('Api running');
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/users',userRoute);
app.use('/api/property',propertyRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(5000,()=>{
    console.log(`Server listening on PORT 5000`)
})