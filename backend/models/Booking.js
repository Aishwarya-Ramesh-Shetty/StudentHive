const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    property:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Property',
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    }
},{timeStamps:true})

const Booking = mongoose.model('Booking',bookingSchema);
module.exports = Booking;