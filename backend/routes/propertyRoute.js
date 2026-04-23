const express = require('express')
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {createProperty} = require('../controllers/propertyController')


router.post('/',protect,createProperty);

module.exports = router;