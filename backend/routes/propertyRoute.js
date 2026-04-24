const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {createProperty,deleteProperty,getProperties,updateProperty} = require('../controllers/propertyController')


router.post('/',protect,createProperty);
router.delete('/:id',protect,deleteProperty);
router.get('/',getProperties);
router.put('/:id',protect,updateProperty);

module.exports = router;