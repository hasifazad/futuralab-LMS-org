const mongoose = require('mongoose');



function connectDatabase() {

    // const uri = 'mongodb://localhost:27017/organizations'; // For local
    const uri = `${process.env.MONGO_URI}organizations?retryWrites=true&w=majority&appName=Cluster0`; // For MongoDB Atlas

    // Connect to MongoDB
    mongoose.connect(uri)
        .then(() => {
            console.log('Connected to MongoDB successfully!');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });

}

module.exports = connectDatabase;