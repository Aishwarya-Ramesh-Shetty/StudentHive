const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {createProperty,deleteProperty} = require('../controllers/propertyController')


router.post('/',protect,createProperty);
router.delete('/:id',protect,deleteProperty);

module.exports = router;