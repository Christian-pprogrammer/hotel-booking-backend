const bcrypt = require('bcrypt');
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

exports.loginUser = async (req,res) => {
    try{
        const validUser = await User.findOne({username: req.body.username});
        if(!validUser) return res.status(400).json({
            message: 'incorrect username or password'
        })
        const validPassword = await bcrypt.compare(req.body.password, validUser.password);
        if(!validPassword) return res.status(400).json({
            message: 'incorrect username or password'
        })
        const token = validUser.generateAuthToken();
        delete(validUser.password);
        res.status(200).json({
            token: token,
            user: validUser
        })
    }catch(err) {
        console.log(err.message);
        res.status(400).json({
            status: false,
            error: err.message,
        });
    }
}