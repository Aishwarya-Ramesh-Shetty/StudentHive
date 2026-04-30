const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {authorizeRoles} = require('../middleware/roleMiddleware')
const {createProperty,deleteProperty,getProperties,updateProperty} = require('../controllers/propertyController')


/**
 * @swagger
 * /api/property:
 *   post:
 *     summary: Create a new property
 *     tags: [Property]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - price
 *               - description
 *               - location
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Property created successfully
 */
router.post('/', protect, authorizeRoles('owner','admin'), createProperty);


/**
 * @swagger
 * /api/property/{id}:
 *   delete:
 *     summary: Delete a property
 *     tags: [Property]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property deleted successfully
 */
router.delete('/:id', protect, deleteProperty);




/**
 * @swagger
 * /api/property:
 *   get:
 *     summary: Get all properties with filters, pagination, and sorting
 *     tags: [Property]
 *     parameters:
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: Filter by location
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price filter
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *         description: Number of results per page
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [latest, price_low, price_high]
 *         description: Sorting option
 *     responses:
 *       200:
 *         description: List of properties
 */
router.get('/', getProperties);


/**
 * @swagger
 * /api/property/{id}:
 *   put:
 *     summary: Update a property
 *     tags: [Property]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Property updated successfully
 */
router.put('/:id', protect, updateProperty);

module.exports = router;