const express = require('express')
const router = express.Router();
const {registerUser,loginUser,addToFavorites,removeFromFavorites,getFavorites} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')



router.post('/register',registerUser);


router.post('/login',loginUser);

router.get('/profile',protect,(req,res)=>{
    res.json(req.user);
})


router.post('/favorites/:propertyId',protect,addToFavorites);



router.delete('/favorites/:propertyId',protect,removeFromFavorites);




router.get('/favorites',protect,getFavorites);

module.exports = router;