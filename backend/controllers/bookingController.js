const Booking = require('../models/Booking')
const Property = require('../models/Property')




const createBooking = async(req,res)=>{
    const {propertyId,startDate,endDate} = req.body;

    const property = await Property.findById(propertyId);
    if(!property){
        return res.status(404).json({messgae:"Property not found"})
    }

    const booking = await Booking.create({
        user:req.user._id,
        property:propertyId,
        owner:property.owner,
        startDate,
        endDate
    })

    res.status(201).json(booking);
}

module.exports = {createBooking};