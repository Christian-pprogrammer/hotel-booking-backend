const express = require('express');
const { createRoom, getAllRooms } = require('../controllers/roomController');
const router = express.Router();
router.route('/')
    .get(getAllRooms)
    .post(createRoom)

module.exports = router;