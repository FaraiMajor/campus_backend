const express = require('express');
const router = express.Router();

router.use('/students', require('./students'));
router.use('/campus', require('./campus'));

module.exports = router