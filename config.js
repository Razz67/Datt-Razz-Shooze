const mongoose = require('mongoose');

function mongoConfig() {
  mongoose.connect(process.env.MONGO_DB);
    mongoose.connection.once('open', () => {
      console.log('connected to mongoDB');
    });
}

module.exports = async() => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        await mongoose.connect(process.env.MONGO_DB, connectionParams);
        console.log('Connected to Mongo database ');
    } catch (err) {
        console.log('Error connecting to Mongo database: ', err);
    }
} 