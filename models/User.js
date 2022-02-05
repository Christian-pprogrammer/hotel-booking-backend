const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    const newPassword = await bcrypt.hash(this.password, 10);
    this.password = newPassword;
    next();
})

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({username: this.username, email: this.email, telephone: this.telephone}, process.env.JWT_PRIVATE_KEY, {
        expiresIn: '1d'
    });
}

const User = mongoose.model("User", userSchema);
module.exports.User = User;