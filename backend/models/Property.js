const mongoose = require('mongoose')

const propertySchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
   price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    images:[{
        url:String,
        public_id:String
    }],
    availabilityStatus:{
        type:String,
        enum:['available','rented','pending'],
        default:'available'
    }
},{timestamps:true});


module.exports = mongoose.model("Property",propertySchema);
