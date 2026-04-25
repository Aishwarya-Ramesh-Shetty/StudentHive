const Property = require('../models/Property');
const asyncHandler = require('express-async-handler');


const createProperty =asyncHandler( async(req,res)=>{
    const {title,price,description,location} = req.body;

    const property = await Property.create({
        title,
        price,
        description,
        location,
        owner : req.user._id
    })

    return res.status(201).json(property);
});

const deleteProperty = async(req,res)=>{
    const property = await Property.findById(req.params.id);

    if(!property){
        return res.status(400).json({messgae:"Property not found"})
    }

    if(property.owner.toString() != req.user._id){
        return res.status(401).json({
            message: "Not authorized to delete this property"
        });
    }

    await property.deleteOne();
    res.json({
        message: "Property deleted successfully"
    });
}


const getProperties = async(req,res)=>{
    const {location,maxPrice,page=1,limit=5,sort} = req.query;

    let filter = {};
    let sortOption = {};

    if(location){
        filter.location = {
            $regex : location,
            $options:i
        };
    }

    if(maxPrice){
        filter.price = {$lte : Number(maxPrice)};
    }

    if(sort == 'latest'){
        sortOption = {createdAt:-1};
    }

    if(sort == "price_low"){
        sortOption = {price:1};
    }

    if(sort == "price_high"){
        sortOption = {price:-1};
    }

    const skip = (Number(page)-1)*Number(limit);

    const totalProperties = await Property.countDocuments(filter);
    const totalPages = Math.ceil(totalProperties/Number(limit));

    const properties = await Property.find(filter).populate(
        'owner',
        'name email'
    ).sort(sortOption).skip(skip).limit(Number(limit));

    res.json({
        page:Number(page),
        limit:Number(limit),
        totalProperties,
        totalPages,
        properties
    });
}

const updateProperty = async(req,res)=>{
    const property = await Property.findById(req.params.id);
    if(!property){
        return res.status(400).json({message:"Property does not exists"});
    }

    if(property.owner.toString()!== req.user._id.toString()){
        return res.status(400).json("User cannot delete this property");
    }

     const {title,price,description,location} = req.body;

     property.title = title || property.title;
     property.price = price || property.price;
     property.description = description || property.description;
     property.location = location || property.location;

     const updatedProperty = await property.save();
     res.json(updatedProperty);
}

module.exports = {createProperty,deleteProperty,getProperties,updateProperty};