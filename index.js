const passport = require('passport');
const express = require('express');
const cors = require('cors');
const { connect } = require('./db');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
})
const userRouter = require('./routes/userRoutes');
const roomRouter = require('./routes/roomRoutes');
const hallRouter = require('./routes/hallRoutes');
const orderRouter = require('./routes/orderRoutes');
const { Room } = require('./models/Room');
connect();
const app = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
require('./config/passport.config')(passport);
app.use('/users', userRouter);
app.use('/rooms', roomRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})