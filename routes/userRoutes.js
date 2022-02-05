const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');
router.route('/signup')
    .post(createUser)

module.exports = router;