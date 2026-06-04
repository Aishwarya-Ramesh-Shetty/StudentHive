const express = require('express')
const router = express.Router();
const {registerUser,loginUser,addToFavorites,removeFromFavorites,getFavorites,getMyBooking} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')



router.post('/register',registerUser);


router.post('/login',loginUser);

router.get('/profile',protect,(req,res)=>{
    res.json(req.user);
})


router.post('/favorites/:propertyId',protect,addToFavorites);



router.delete('/favorites/:propertyId',protect,removeFromFavorites);




router.get('/favorites',protect,getFavorites);

router.get('/my/bookings',protect,getMyBooking);

module.exports = router;