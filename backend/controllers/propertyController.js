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

module.exports = {createProperty};