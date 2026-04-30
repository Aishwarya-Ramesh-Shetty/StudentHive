const express = require('express')
const router = express.Router();
const {registerUser,loginUser,addToFavourites} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')



router.post('/register',registerUser);
router.post('/login',loginUser);

router.get('/profile',protect,(req,res)=>{
    res.json(req.user);
})

router.post('/favourites',addToFavourites);

module.exports = router;