const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

const {createBooking} = require('../controllers/bookingController')

router.post('/bookings',protect,createBooking);

module.exports = router;