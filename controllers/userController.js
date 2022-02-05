const { User } = require('../models/User');
exports.createUser = async (req,res) => {
    try {
        console.log(req.body)
        const created = await User.create(req.body);
        const token = created.generateAuthToken();
        delete created.password;
        return res.status(200).json({
          token: token,
          user: created
        });
    }catch(err) {
        console.log(err.message);
        res.status(400).json({
            status: false,
            error: err.message
        })
    }
}