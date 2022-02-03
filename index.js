const passport = require('passport');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
})
const app = express();
app.use(passport.initialize());
require('./config/passport.config')(passport);
app.use('/')
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})