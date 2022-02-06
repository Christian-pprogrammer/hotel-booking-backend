const mongoose = require('mongoose');
exports.connect = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connected to db...');
    }catch(err) {
        console.log(err.message);
    }
}