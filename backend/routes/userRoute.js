const express = require('express')
const router = express.Router();
const {registerUser,loginUser,addToFavorites,removeFromFavorites,getFavorites} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */


router.post('/register',registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login',loginUser);

router.get('/profile',protect,(req,res)=>{
    res.json(req.user);
})

/**
 * @swagger
 * /api/users/favorites/{propertyId}:
 *   post:
 *     summary: Add property to favorites
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: propertyId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Property added to favorites
 */

router.post('/favorites/:propertyId',protect,addToFavorites);

/**
 * @swagger
 * /api/users/favorites/{propertyId}:
 *   delete:
 *     summary: Remove property from favorites
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: propertyId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Property removed from favorites
 */


router.delete('/favorites/:propertyId',protect,removeFromFavorites);

/**
 * @swagger
 * /api/users/favorites:
 *   get:
 *     summary: Get user favorites
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of favorite properties
 */


router.get('/favorites',protect,getFavorites);

module.exports = router;