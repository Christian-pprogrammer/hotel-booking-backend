const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('../models/User');
module.exports = (passport) => {
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
        secretOrKey: process.env.JWT_PRIVATE_KEY
    }, async (payload, done) => {
        const validUser = await User.findById(payload.id);
        if(validUser) {
            return done(null, validUser);
        }else{
            return done(null, false);
        }
    }))
}