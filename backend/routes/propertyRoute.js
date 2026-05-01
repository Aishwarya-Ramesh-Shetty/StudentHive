const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {authorizeRoles} = require('../middleware/roleMiddleware')
const {createProperty,deleteProperty,getProperties,updateProperty} = require('../controllers/propertyController')

const upload = require('../middleware/upload')



router.post('/', protect, authorizeRoles('owner','admin'),upload.array('images',5), createProperty);

router.delete('/:id', protect, deleteProperty);

router.get('/', getProperties);

router.put('/:id', protect, updateProperty);

module.exports = router;