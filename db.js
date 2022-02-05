const mongoose = require('mongoose');
exports.connect = async () => {
    try{
        await mongoose.connect('mongodb://localhost/hotel-booking', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connected to db...');
    }catch(err) {
        console.log(err.message);
    }
}