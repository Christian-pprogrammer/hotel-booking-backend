const { Room } = require("../models/Room");
exports.createRoom = async (req,res) => {
    try {
        const created = await Room.create(req.body);
        res.status(200).json({
            success: true,
            room: created
        })
    }catch(err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

exports.getAllRooms = async (req,res) => {
    try{
        const rooms = await Room.find();
        res.status(200).json({
            success: true,
            rooms: rooms
        })
    }catch(err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}