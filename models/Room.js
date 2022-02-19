const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        require: true
    },
    floorNumber: {
        type: Number,
        required: true
    },
    roomImage: {
        type: Object,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Room = mongoose.model("Room", roomSchema);
module.exports.Room = Room;