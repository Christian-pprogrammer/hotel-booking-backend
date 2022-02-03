const { User } = require('../controllers/userController');
exports.createUser = async (req,res) => {
    try {
        const created = await User.create(req.body);
        return res.status(200).json({
          status: true,
          user: created,
        });
    }catch(err) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }
}