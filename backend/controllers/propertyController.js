const Property = require('../models/Property')


const createProperty = async(req,res)=>{
    const {title,price,description,location} = req.body;

    const property = await Property.create({
        title,
        price,
        description,
        location,
        owner : req.user._id
    })

    return res.status(201).json(property);
};

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
    const {location,maxPrice} = req.query;

    let filter = {};

    if(location){
        filter.location = location;
    }

    if(maxPrice){
        filter.price = {$lte : Number(maxPrice)};
    }

    const properties = await Property.find(filter).populate(
        'owner',
        'name email'
    );

    res.json(properties);
}

module.exports = {createProperty,deleteProperty,getProperties};