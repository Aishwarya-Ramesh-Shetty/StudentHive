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
    const booking = await Booking.findById(req.params.id);

    if(!booking){
        return res.status(404).json({message:"Booking not found"})
    }

    if(booking.owner.toString()!==req.user._id.toString()){
        return res.status(401).json({
            message: "Not authorized to approve this booking"
        });
    }

    if(booking.status !== "pending"){
        return res.status(400).json({message:`Booking already ${booking.status}`});
    }

    const existingApprovedBooking = await Booking.findOne({
        property:booking.property,
        status:'approved'
    })

    if(existingApprovedBooking){
        return res.status(400).json({message:"Property is already booked!"})
    }

    booking.status = "approved";
    await booking.save();

    await Booking.updateMany(
        {
            property:booking.property,
            status:'pending',
            _id:{$ne:booking._id}

        },
        {
            status:'rejected'
        }
    )

    const property = await Property.findById(booking.property);
    property.availabilityStatus = 'rented';
    await property.save();

    res.json({
        messgae:"Booking aprroved",
        booking
    })
}


const rejectBooking = async(req,res)=>{
    const booking = await Booking.findById(req.params.id);

    if(!booking){
        return res.status(404).json({message:"Booking not found"})
    }


    if(booking.owner.toString()!==req.user._id.toString()){
        return res.status(401).json({
            message: "Not authorized to approve this booking"
        });
    }


    if(booking.status !== "pending"){
        return res.status(400).json({message:`Booking already ${booking.status}`});
    }

    booking.status = "rejected";
    await booking.save();

    res.json({
        message: "Booking rejected",
        booking
    });


}


const getOwnerBookings = async(req,res)=>{
    const bookings = await Booking.find({
        owner:req.user._id
    }).populate('user','name email').populate('property','title location price');

    if(bookings.length === 0){
        return res.status(404).json({message:"No booking found"});
    }


    
    res.json(bookings);

}

module.exports = {createBooking,approveBooking,rejectBooking,getOwnerBookings};