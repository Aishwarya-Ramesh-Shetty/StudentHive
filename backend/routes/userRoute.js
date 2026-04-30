const express = require('express')
const router = express.Router();
const {registerUser,loginUser,addToFavourites,removeFromFavorites,getFavourites} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')



router.post('/register',registerUser);
router.post('/login',loginUser);

router.get('/profile',protect,(req,res)=>{
    res.json(req.user);
})

router.post('/favourites/:propertyId',protect,addToFavourites);

router.delete('/favourites/:propertyId',protect,removeFromFavorites);
router.get('/favourites',protect,getFavourites);

module.exports = router;