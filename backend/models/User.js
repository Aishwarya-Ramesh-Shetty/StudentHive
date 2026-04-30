const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['student', 'owner', 'admin'],
        default:'student'
    },
    favorites:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Property'
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User;