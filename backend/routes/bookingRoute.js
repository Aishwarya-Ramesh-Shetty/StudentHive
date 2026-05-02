const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

const {createBooking,approveBooking,rejectBooking} = require('../controllers/bookingController')

router.post('/bookings',protect,createBooking);
router.put('/:id/aprrove',protect,approveBooking);
router.put('/:id/reject',protect,rejectBooking);

module.exports = router;