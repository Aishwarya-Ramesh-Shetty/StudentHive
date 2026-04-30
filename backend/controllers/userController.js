const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerUser = async(req,res)=>{
    const {name,email,password,role} = req.body;
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
            password:hashedPassword,
            role
        })
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        });
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}


const loginUser = async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"Invalid email or password"});
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(400).json({message:"Invalid email or password"})
    }

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'7d'}
    );

    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token
    })
}


const addToFavourites = async(req,res)=>{
    const user = await User.findById(req.user._id);
    const propertyId = req.params.propertyId;

    await User.findByIdAndUpdate(req.user._id,{
        $addToSet:{favourites:propertyId}
    })

    res.json({message:"Property added to favorites"});
}

const removeFromFavorites = async(req,res)=>{
    const user = await User.findById(req.user._id);
    const propertyId = req.params.propertyId;

    await User.findByIdAndUpdate(req.user._id,{
        $pull:{favourites:propertyId}
    })

    res.json({message:"Property removed from favorites"});
}

module.exports = {registerUser,loginUser,addToFavourites,removeFromFavorites};