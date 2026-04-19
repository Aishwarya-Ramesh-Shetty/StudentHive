const User = require('../models/User');
const bcrypt = require('bcryptjs')

const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;
    try{

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        });
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

module.exports = {registerUser};