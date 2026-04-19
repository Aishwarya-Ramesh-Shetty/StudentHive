const mongoose = require('mongoose')


const DB = async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongodb connected')
    }
    catch(err){
        console.error(err);
    }
}

module.exports = DB;