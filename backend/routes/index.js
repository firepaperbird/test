const express = require('express');
const router = express.Router();

//router.use('api/user', require('./user'));
router.use('/api/post', require('./post'));

module.exports = router;