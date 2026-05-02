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


const approveBooking = async(req,res)=>{
    const booking = Booking.findById(req.params.id);

    if(!booking){
        return res.status(404).json({message:"Booking not found"})
    }

    if(booking.owner.toString()!==req.user._id.toString()){
        return res.status(401).json({
            message: "Not authorized to approve this booking"
        });
    }

    booking.status = "approved";
    await booking.save();

    res.json({
        messgae:"Booking aprroved",
        booking
    })
}


const rejectBooking = async(req,res)=>{
    const booking = Booking.findById(req.params.id);

    if(!booking){
        return res.status(404).json({message:"Booking not found"})
    }


    if(booking.owner.toString()!==req.user._id.toString()){
        return res.status(401).json({
            message: "Not authorized to approve this booking"
        });
    }

    booking.status = "rejected";
    await booking.save();

    res.json({
        message: "Booking rejected",
        booking
    });


}

module.exports = {createBooking,approveBooking,rejectBooking};