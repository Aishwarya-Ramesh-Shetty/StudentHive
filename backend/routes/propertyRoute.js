const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {authorizeRoles} = require('../middleware/roleMiddleware')
const {createProperty,deleteProperty,getProperties,updateProperty} = require('../controllers/propertyController')


router.post('/',protect,authorizeRoles('owner','admin'),createProperty);
router.delete('/:id',protect,deleteProperty);
router.get('/',getProperties);
router.put('/:id',protect,updateProperty);

module.exports = router;